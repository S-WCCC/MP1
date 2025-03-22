export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Chi Wang'
export const headline = 'Student at Tsinghua University.'
export const introduction =
  "Buenos! My name is Chi Wang. I'm from Shaanxi and an undergraduate student of Tsinghua, Beijing, China."
export const email = 'w-c22@mails.tsinghua.edu.cn'
export const githubUsername = 'S-WCCC'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Buenos! My name is Chi Wang. I'm from Shaanxi and a student of Tsinghua University.",
  'Currently I am exploring Ecological Systems,Synthetic Biology,Smart Fibers and AI.',
  "I started this blog to share the insights I learn every day.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about synthetic biology, materials, AI and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/455155234?spm_id_from=333.1387.0.0',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
  'elsevier',
  'zhihu'
]
