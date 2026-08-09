import CareersClient from './CareersClient'

export const metadata = {
  title: 'Careers at Haute World Developers | Join Our Real Estate Team in Noida NCR',
  description:
    'Explore career opportunities at Haute World Developers — a premium real estate company delivering excellence since 2011. Join our growing team in Noida, Delhi NCR. Apply now.',
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