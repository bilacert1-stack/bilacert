import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
	Award,
	FileText,
	Headphones,
	Shield,
	Radio,
	Ship,
	ArrowRight,
	CheckCircle,
	Clock,
	Users,
} from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import React from 'react';

// 1. Define the interface for your Service data
interface Service {
	id: string;
	title: string;
	description: string;
	icon: string; // The name of the icon as a string from DB
	features: string[];
	pricing: string;
	href: string;
	created_at: string;
}

export const metadata: Metadata = {
	title: 'Our Services',
	description:
		'Comprehensive ICASA and NRCS compliance services including type approvals, licensing, and regulatory support. Expert guidance for South African businesses.',
	keywords: [
		'ICASA type approval services',
		'NRCS LOA applications',
		'radio dealer licensing',
		'ECS ECNS licensing services',
		'VHF radio license',
		'license exemptions',
		'compliance services South Africa',
		'regulatory approval services',
	],
	openGraph: {
		title: 'Our Services - ICASA & NRCS Compliance Solutions',
		description:
			'Comprehensive ICASA and NRCS compliance services including type approvals, licensing, and regulatory support. Expert guidance for South African businesses.',
		url: 'https://bilacert.co.za/services',
		type: 'website',
	},
	alternates: {
		canonical: 'https://bilacert.co.za/services',
	},
};

export default async function ServicesPage() {
	const supabase = await createClient();
	
	// 2. Fetch data and cast it to our Service interface
	const { data: servicesDataRaw } = await supabase
		.from('services')
		.select('*')
		.order('created_at', { ascending: true });

	const servicesData = (servicesDataRaw as Service[]) || [];

	const iconMap: Record<string, React.ElementType> = {
		Award,
		FileText,
		Headphones,
		Shield,
		Radio,
		Ship,
	};

	// 3. The 'service' parameter is now correctly typed
	const services = servicesData.map((service: Service) => ({
		...service,
		icon: iconMap[service.icon] ? (
			// @ts-ignore - Dynamic icon rendering
			React.createElement(iconMap[service.icon], { className: 'h-8 w-8' })
		) : (
			<Award className='h-8 w-8' />
		),
	}));

	const process = [
		{
			step: '1',
			title: 'Initial Consultation',
			description:
				'We assess your specific needs and determine the most appropriate compliance pathway.',
		},
		{
			step: '2',
			title: 'Documentation Review',
			description:
				'We review and prepare all necessary documentation to ensure accuracy and completeness.',
		},
		{
			step: '3',
			title: 'Application Submission',
			description:
				'We handle the entire submission process and manage all regulatory communications.',
		},
		{
			step: '4',
			title: 'Follow-up & Approval',
			description: 'We track progress, address any issues, and ensure timely approval.',
		},
		{
			step: '5',
			title: 'Ongoing Support',
			description: 'We provide continued support for renewals, amendments, and compliance updates.',
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/herosetion/Services.jpg'
					alt='Our Services'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl lg:text-5xl font-bold mb-6'>Our Services</h1>
						<p className='text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto'>
							Comprehensive licensing and compliance solutions covering all aspects of ICASA and
							NRCS regulatory approvals
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>What We Offer</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							From initial consultation to final approval, we manage every step of your compliance
							journey
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((service, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2'>
								<div className='text-accent mb-4'>{service.icon}</div>
								<h3 className='text-xl font-semibold text-primary mb-3'>{service.title}</h3>
								<p className='text-gray-600 mb-4'>{service.description}</p>

								<div className='mb-4'>
									<h4 className='font-semibold text-primary mb-2'>Includes:</h4>
									<ul className='space-y-1'>
										{service.features.map((feature, featureIndex) => (
											<li
												key={featureIndex}
												className='flex items-center text-sm text-gray-600'>
												<CheckCircle className='h-4 w-4 text-accent mr-2 flex-shrink-0' />
												{feature}
											</li>
										))}
									</ul>
								</div>

								<div className='flex justify-between items-center mb-4'>
									<span className='text-lg font-semibold text-primary'>{service.pricing}</span>
								</div>

								<Link
									href={service.href}
									className='w-full bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors duration-200 text-center inline-flex items-center justify-center'>
									Learn More
									<ArrowRight className='h-4 w-4 ml-2' />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our Process */}
			<section className='py-20 bg-secondary-gray'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>Our Process</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							A proven 5-step process that ensures your compliance journey is smooth and successful
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
						{process.map((step, index) => (
							<div
								key={index}
								className='text-center'>
								<div className='bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4'>
									{step.step}
								</div>
								<h3 className='text-lg font-semibold text-primary mb-2'>{step.title}</h3>
								<p className='text-gray-600 text-sm'>{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Our Services */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>
							Why Choose Our Services?
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We combine expertise, efficiency, and personalized support to deliver exceptional
							results
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='text-center'>
							<div className='bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
								<Users className='h-8 w-8 text-accent' />
							</div>
							<h3 className='text-xl font-semibold text-primary mb-4'>Expert Guidance</h3>
							<p className='text-gray-600'>
								Our team has deep industry knowledge and regulatory expertise to guide you through
								complex compliance requirements.
							</p>
						</div>

						<div className='text-center'>
							<div className='bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
								<Clock className='h-8 w-8 text-accent' />
							</div>
							<h3 className='text-xl font-semibold text-primary mb-4'>Fast & Efficient</h3>
							<p className='text-gray-600'>
								We minimize delays by ensuring applications are complete and accurate the first
								time, with 30% faster processing than industry average.
							</p>
						</div>

						<div className='text-center'>
							<div className='bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
								<CheckCircle className='h-8 w-8 text-accent' />
							</div>
							<h3 className='text-xl font-semibold text-primary mb-4'>Guaranteed Success</h3>
							<p className='text-gray-600'>
								With a 100% success rate on first-time applications, you can trust us to deliver
								results that keep your business compliant.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-primary to-primary-light text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6'>Ready to Get Started?</h2>
					<p className='text-xl mb-8 text-gray-200'>
						Let&apos;s discuss your compliance needs and find the best solution for your business.
						Get a free consultation today.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/contact'
							className='bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1'>
							Get Free Consultation
						</Link>
						<Link
							href='tel:0754304433'
							className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200'>
							Call 075 430 4433
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
