import FormClient from './FormClient';

export function generateStaticParams() {
  return [
    { type: 'vendor' },
    { type: 'sponsor' },
    { type: 'artist-music' },
    { type: 'influencer' },
    { type: 'general-inquiry' },
    { type: 'consultation' },
    { type: 'onboarding' },
    { type: 'volunteer' },
  ];
}

export default function FormPage({ params }) {
  return <FormClient params={params} />;
}
