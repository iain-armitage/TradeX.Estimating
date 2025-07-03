
'use client';

export default function PlansPage() {
  const plans = [
    {
      title: 'Office Complex A',
      status: 'In Progress',
      description: 'A modern office building designed with sustainability in mind.',
      image: '/placeholder-plan-a.jpg',
    },
    {
      title: 'Shopping Mall B',
      status: 'Completed',
      description: 'A comprehensive shopping mall featuring retail, dining, and entertainment spaces.',
      image: '/placeholder-plan-b.jpg',
    },
    {
      title: 'Apartment Complex C',
      status: 'Planning',
      description: 'A high-rise residential building offering luxury apartments with city views.',
      image: '/placeholder-plan-c.jpg',
    },
    {
      title: 'Tech Campus D',
      status: 'Under Construction',
      description: 'A state-of-the-art technology campus with integrated green spaces and facilities.',
      image: '/placeholder-plan-d.jpg',
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {plans.map((plan, index) => (
        <div key={index} className="bg-white p-4 rounded shadow-sm">
          <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-sm">[ Plan Image ]</span>
          </div>
          <h3 className="font-semibold text-lg">{plan.title}</h3>
          <p className="text-sm text-gray-600 mb-1">Status: {plan.status}</p>
          <p className="text-sm text-gray-700">{plan.description}</p>
        </div>
      ))}
    </div>
  );
}
