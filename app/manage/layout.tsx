import AuthProvider from '../context/AuthProvider';

export const metadata = {
	title: 'PostHigh - Área do cliente',
	description: 'Gerencie suas publicações e insights!',
};

export default function ManageLayout({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider>
			<main>{children}</main>
		</AuthProvider>
	);
}
