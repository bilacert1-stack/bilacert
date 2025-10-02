'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

export default function RadioDealerLicensingForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			await addDoc(collection(db, 'radio-dealer-licensing'), {
				...formData,
				timestamp: new Date(),
			});
			setSubmitStatus('success');
			setFormData({
				name: '',
				email: '',
				phone: '',
				company: '',
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
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-2xl w-full bg-white p-8 rounded-xl shadow-md space-y-8'>
				<div>
					<h2 className='text-center text-3xl font-extrabold text-gray-900'>
						Radio Dealer Licensing Application
					</h2>
					<p className='mt-2 text-center text-sm text-gray-600'>
						Please fill out the form below to start your application.
					</p>
				</div>

				{submitStatus === 'success' && (
					<div className='bg-green-50 border border-green-200 rounded-lg p-4'>
						<div className='flex items-center'>
							<CheckCircle className='h-5 w-5 text-green-500 mr-2' />
							<p className='text-green-700'>
								Thank you for your submission! We will get back to you shortly.
							</p>
						</div>
					</div>
				)}

				{submitStatus === 'error' && (
					<div className='bg-red-50 border border-red-200 rounded-lg p-4'>
						<div className='flex items-center'>
							<AlertCircle className='h-5 w-5 text-red-500 mr-2' />
							<p className='text-red-700'>
								Sorry, there was an error submitting your form. Please try again.
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
								htmlFor='company'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Company Name
							</label>
							<input
								type='text'
								id='company'
								name='company'
								value={formData.company}
								onChange={handleChange}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
								placeholder='Your company name'
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-gray-700 mb-2'>
							Comments/Message
						</label>
						<textarea
							id='message'
							name='message'
							rows={4}
							value={formData.message}
							onChange={handleChange}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
							placeholder='Any additional information or questions'
						/>
					</div>

					<button
						type='submit'
						disabled={isSubmitting}
						className='w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'>
						{isSubmitting ? (
							<>
								<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
								Submitting...
							</>
						) : (
							<>
								<Send className='h-5 w-5 mr-2' />
								Submit Application
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	);
}
