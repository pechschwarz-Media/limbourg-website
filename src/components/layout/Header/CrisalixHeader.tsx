'use client';

import { useEffect, useRef } from 'react';
import styles from './CrisalixHeader.module.css';

export default function CrisalixHeader() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Small delay to ensure the DOM is fully ready
		const timeoutId = setTimeout(() => {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://pro.crisalix.com/reviews_widget.js?token=208177cba0bbb2e6adc0dff6f8bc9812&type=micro_review_count&selector=crisalix_widget_wrap_cf92e54f';
			script.async = true;
			document.body.appendChild(script);

			// Store reference for cleanup
			(window as any).__crisalixScript = script;
		}, 100);

		return () => {
			clearTimeout(timeoutId);
			const script = (window as any).__crisalixScript;
			if (script && script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	}, []);

	return (
		<div className={styles.crisalixHeader} ref={containerRef}>
			<div className="container">
				<div className="crisalix_widget_wrap_cf92e54f" />
			</div>
		</div>
	);
}
