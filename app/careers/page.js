import CareersClient from './CareersClient'

export const metadata = {
  title: 'Careers at Haute World Developers | Jobs in Real Estate NCR',
  description:
    'Explore exciting real estate jobs in NCR with Haute World Developers. Join our growing team and build a successful career in sales and real estate',
  keywords: [
    'careers at Haute World Developers',
    'real estate jobs Noida',
    'real estate careers NCR',
    'property sales jobs Delhi',
    'jobs in real estate India',
    'Haute World Developers hiring',
  ],
  alternates: { canonical: 'https://www.hautedevelopers.com/careers' },
  openGraph: {
    title: 'Careers at Haute World Developers | Real Estate Jobs in NCR',
    description: 'Be part of a team that is redefining premium real estate across Delhi NCR, Vrindavan, Dholera & Dehradun. View open roles at Haute World Developers.',
    url: 'https://www.hautedevelopers.com/careers',
  },
}

export default function CareersPage() {
  return <CareersClient />
}