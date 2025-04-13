import { Box } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';

export const SidebarFooterWatermark = (): ReactElement | null => {
	return (
		<Box pi={16} pbe={8}>
			<Box is='a' href='https://example.com' target='_blank' rel='noopener noreferrer'>
				<Box fontScale='micro' color='hint' pbe={4}>
					Powered by Monster Energy and Dreams
				</Box>
			</Box>
		</Box>
	);
};
