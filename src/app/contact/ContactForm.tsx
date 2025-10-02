'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		service: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			await addDoc(collection(db, 'contacts'), {
				...formData,
				timestamp: new Date(),
			});
			setSubmitStatus('success');
			setFormData({
				name: '',
				email: '',
				phone: '',
				service: '',
				message: '',
			});
		} catch (error) {
			console.error('Error submitting form: ', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/herosetion/Contact-Us.jpg'
					alt='Get in touch'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl lg:text-5xl font-bold mb-6'>Get in Touch</h1>
						<p className='text-xl text-gray-200 max-w-3xl mx-auto'>
							Ready to simplify your compliance journey? Contact our experts for a free consultation
							and discover how we can help your business navigate ICASA and NRCS requirements.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Information */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
						<div className='text-center'>
							<div className='bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Phone className='h-8 w-8 text-accent' />
							</div>
							<h3 className='text-xl font-semibold text-primary mb-2'>Phone</h3>
							<p className='text-gray-600 mb-2'>075 430 4433</p>
							<p className='text-sm text-gray-500'>Mon-Fri 08:00 - 16:30</p>
						</div>

						<div className='text-center'>
							<div className='bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Mail className='h-8 w-8 text-accent' />
							</div>
							<h3 className='text-xl font-semibold text-primary mb-2'>Email</h3>
							<p className='text-gray-600 mb-2'>info@bilacert.co.za</p>
							<p className='text-sm text-gray-500'>We&apos;ll respond within 24 hours</p>
						</div>

						<div className='text-center'>
							<div className='bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Clock className='h-8 w-8 text-accent' />
							</div>
							<h3 className='text-xl font-semibold text-primary mb-2'>Business Hours</h3>
							<p className='text-gray-600 mb-2'>Monday - Friday</p>
							<p className='text-sm text-gray-500'>08:00 - 16:30</p>
						</div>
					</div>

					{/* Contact Form */}
					<div className='max-w-2xl mx-auto'>
						<div className='bg-white p-8 rounded-xl shadow-sm'>
							<h2 className='text-2xl font-bold text-primary mb-6 text-center'>
								Send us a Message
							</h2>

							{submitStatus === 'success' && (
								<div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-6'>
									<div className='flex items-center'>
										<CheckCircle className='h-5 w-5 text-green-500 mr-2' />
										<p className='text-green-700'>
											Thank you! Your message has been sent successfully. We&apos;ll get back to you
											within 24 hours.
										</p>
									</div>
								</div>
							)}

							{submitStatus === 'error' && (
								<div className='bg-red-50 border border-red-200 rounded-lg p-4 mb-6'>
									<div className='flex items-center'>
										<AlertCircle className='h-5 w-5 text-red-500 mr-2' />
										<p className='text-red-700'>
											Sorry, there was an error sending your message. Please try again or contact us
											directly.
										</p>
									</div>
								</div>
							)}

							<form
								onSubmit={handleSubmit}
								className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Full Name *
										</label>
										<input
											type='text'
											id='name'
											name='name'
											required
											value={formData.name}
											onChange={handleChange}
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
											placeholder='Your full name'
										/>
									</div>

									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Email Address *
										</label>
										<input
											type='email'
											id='email'
											name='email'
											required
											value={formData.email}
											onChange={handleChange}
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
											placeholder='your.email@example.com'
										/>
									</div>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Phone Number
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
											placeholder='+27 XX XXX XXXX'
										/>
									</div>

									<div>
										<label
											htmlFor='service'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Service Interest
										</label>
										<select
											id='service'
											name='service'
											value={formData.service}
											onChange={handleChange}
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'>
											<option value=''>Select a service</option>
											<option value='icasa-type-approvals'>ICASA Type Approvals</option>
											<option value='nrcs-loa-applications'>NRCS LOA Applications</option>
											<option value='radio-dealer-licensing'>Radio Dealer Licensing</option>
											<option value='class-ecs-ecns-licensing'>Class ECS/ECNS Licensing</option>
											<option value='license-exemptions'>License Exemptions</option>
											<option value='ski-boat-vhf-licensing'>Ski Boat VHF Licensing</option>
											<option value='general-inquiry'>General Inquiry</option>
										</select>
									</div>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Message *
									</label>
									<textarea
										id='message'
										name='message'
										required
										rows={6}
										value={formData.message}
											onChange={handleChange}
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
										placeholder='Tell us about your compliance needs...'
									/>
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'>
									{isSubmitting ? (
										<>
											<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
											Sending...
										</>
									) : (
										<>
											<Send className='h-5 w-5 mr-2' />
											Send Message
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-secondary-gray'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl font-bold text-primary mb-6'>Need Immediate Assistance?</h2>
					<p className='text-xl text-gray-600 mb-8'>
						For urgent compliance matters, call us directly at 075 430 4433 or reach out via
						WhatsApp for instant support.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='tel:0754304433'
							className='bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors duration-200'>
							Call Now
						</a>
						<a
							href='https://wa.me/27754304433'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200'>
							WhatsApp Us
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
