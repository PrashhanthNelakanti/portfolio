
import { StarIcon } from '@heroicons/react/solid'

const project = {
    projectName: 'Client Central Modernization',
    tech: 'Environment',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Experience', href: '#' },
        { id: 2, name: 'Projects', href: '/projects' },
    ],
    org: {
        name: 'Mphasis'
    },
    duration: {
        tenure: 'Jan 2020 - Jun 2021'
    },
    description:
        " Client Central Modernization is application which monitors the interaction of the customer based timeframe as per the business",
    highlights: [
        'Ability to participate in collaborative application and platform architecture design sessions',
        'Ability to effectively communicate technical concepts to both technical and nontechnical audiences',
        'Effective relationship builder: ability to partner cross-functionally and work effectively with various levels and functions within an organization',
    ],
    details:
        'Attending Scrums and part of Scrum team, and also Guiding/suggesting other team members on best approaches.',

    reviews: [
        { average: 4, name: "Java-8" },
        { average: 4, name: "Spring Boot" },
        { average: 4, name: "Spring Data-Jpa" },
        { average: 4, name: "Microservices" },
        { average: 3, name: "SqlServer" },
        { average: 3, name: "PCF" },
        { average: 3, name: "Swagger-UI" },

    ]
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Mphasis() {


    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                        {project.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-4 h-5 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={project.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {project.projectName}
                            </a>
                        </li>
                    </ol>
                </nav>

                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{project.projectName}</h1>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only">Project information</h2>
                        <p className="text-3xl text-gray-900">{project.tech}</p>

                        {/* {project.reviews.map((review) => (
                            <div className="mt-1">
                                <div className="mt-1 flex space-x-1 ml-1  justify-between text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {review.name}
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                review.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))} */}

                        <form className="mt-10">
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl text-gray-900 font-medium">Organization</h3>
                                    <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {project.org.name}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl text-gray-900 font-medium">Tenure</h3>
                                    <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {project.duration.tenure}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{project.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                    {project.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{project.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}