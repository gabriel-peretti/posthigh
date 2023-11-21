import Button from '@/app/components/Button';
import { Toast } from 'flowbite-react';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';

export default function TwitterUI() {
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [isError, setIsError] = useState(false);
	const [tweetText, setTweetText] = useState<string>('');

	const handleTweetChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTweetText(e.target.value);
	};

	const postTweet = async () => {
		if (typeof tweetText !== 'string') {
			console.error('tweetText is not a string:', tweetText);
			return;
		}
		const res = await fetch('/api/twitter', {
			method: 'POST',
			body: JSON.stringify({ tweetText }),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
		if (res.status === 'ok') {
			setToastMessage('Tweet postado com sucesso!');
			setIsError(false);
		} else {
			setToastMessage('Falha ao postar tweet :(');
			setIsError(true);
		}
		setShowToast(true);
	};

	useEffect(() => {
		if (showToast) {
			const timer = setTimeout(() => {
				setShowToast(false);
			}, 6000);

			return () => clearTimeout(timer);
		}
	}, [showToast]);

	return (
		<div className="h-full items-center flex flex-col ">
			<textarea
				className="resize-none h-36 w-1/3 mt-36"
				maxLength={280}
				placeholder="Escreva seu tweet"
				value={tweetText}
				onChange={handleTweetChange}
			/>
			<div className="mt-10">
				<Button size="lg" label="Postar" onPress={postTweet}></Button>
			</div>
			<h1 className="text-center mt-36 w-2/3 text-lg">
				Em busca de inspiração ou orientação para suas publicações? Não se preocupe! Acesse nossas
				páginas de{' '}
				<Link target="_blank" className="text-blue-500 font-bold" href={'/tips'}>
					dicas
				</Link>{' '}
				e{' '}
				<Link target="_blank" className="text-blue-500 font-bold" href={'/strategies'}>
					estratégias
				</Link>{' '}
				para obter insights valiosos e potencializar seus resultados nas redes sociais.
			</h1>
			{showToast && (
				<div className="fixed bottom-0 right-0 mb-5 mr-5">
					<Toast className={`${isError ? 'bg-red-700' : 'bg-green-700'} ease-in`}>
						<div className="text-white">{toastMessage}</div>
					</Toast>
				</div>
			)}
		</div>
	);
}
