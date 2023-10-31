interface ButtonProps {
	label: string;
	variant?: 'primary' | 'secondary' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
}

export default function Button({ label, variant = 'primary', size = 'md' }: ButtonProps) {
	const sizeClasses = {
		sm: 'w-44',
		md: 'w-56',
		lg: 'w-80',
	};

	const variantClasses = {
		primary:
			'text-white bg-gradient-to-r from-secondary to-primary hover:animate-pulse hover:shadow-md ',
		secondary: 'bg-black hover:animate-pulse hover:shadow-md text-white',
		ghost: 'text-white bg-transparent hover:animate-pulse hover:shadow-md border-2 border-white ',
	};

	const defaultClasses = 'h-12 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-2 rounded-lg cursor-pointer';

	const classes = `${defaultClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

	return <button className={classes}>{label}</button>;
}
