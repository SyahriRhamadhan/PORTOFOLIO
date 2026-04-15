export type Feature = {
  title: string
  desc: string
  icon: 'code' | 'brain' | 'users' | 'zap'
  tone: string
}

export type Experience = {
  period: string
  role: string
  org: string
  intro: string
  points: string[]
}

export type Project = {
  name: string
  category: string
  description: string
  tags: string[]
  theme: {
    preview: string
    titleBar: string
    label: string
    actionPrimary: string
  }
  links: {
    details: string
    demo: string
    code: string
  }
}

export type Certificate = {
  title: string
  issuer: string
  date: string
  description: string
  skills: string[]
  link: string
  color: string
  imageUrl?: string
}
