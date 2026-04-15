import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const PROFILE_SLUG = 'syahri-rhamadhan'
const SOURCE_URL = `https://www.credly.com/users/${PROFILE_SLUG}/badges.json`

async function main() {
  const res = await fetch(SOURCE_URL, {
    headers: { Accept: 'application/json' },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch Credly badges: ${res.status} ${res.statusText}`)
  }

  const payload = await res.json()
  const rawBadges = Array.isArray(payload?.data) ? payload.data : []

  const badges = rawBadges
    .map((badge) => {
      const issuerName =
        badge?.badge_template?.issuer?.entities?.[0]?.entity?.name ??
        badge?.issuer?.entities?.[0]?.entity?.name ??
        'Credly Issuer'

      const badgeId = String(badge?.id ?? '')
      const badgeUrl = badgeId
        ? `https://www.credly.com/badges/${badgeId}`
        : `https://www.credly.com/users/${PROFILE_SLUG}/badges`

      return {
        id: badgeId,
        title: String(badge?.badge_template?.name ?? ''),
        issuer: String(issuerName),
        issuedAt: String(badge?.issued_at_date ?? ''),
        imageUrl: String(badge?.badge_template?.image_url ?? badge?.image_url ?? ''),
        badgeUrl,
      }
    })
    .filter((badge) => badge.id && badge.title)
    .sort((a, b) => b.issuedAt.localeCompare(a.issuedAt))

  const generatedAt = new Date().toISOString()
  const output = `/* AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
   * Source: ${SOURCE_URL}
   * Generated at: ${generatedAt}
   */

export const credlyProfileUrl = "https://www.credly.com/users/${PROFILE_SLUG}/badges#credly";

export const credlyBadges = ${JSON.stringify(badges, null, 2)} as const;
`

  const here = dirname(fileURLToPath(import.meta.url))
  const target = resolve(here, '../src/data/credlyBadges.ts')
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, output, 'utf8')

  console.log(`Generated ${badges.length} badges -> ${target}`)
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
