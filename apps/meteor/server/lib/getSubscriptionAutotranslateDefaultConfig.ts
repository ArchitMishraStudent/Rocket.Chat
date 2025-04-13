import type { AtLeast, IUser } from '@rocket.chat/core-typings';

import { settings } from '../../app/settings/server';

export function getSubscriptionAutotranslateDefaultConfig(user: AtLeast<IUser, 'settings'>):
	| {
			autoTranslate: boolean;
			autoTranslateLanguage: string;
	  }
	| undefined {
	// Always enable auto-translate with system language
	const languageSetting = String(settings.get('Language') || 'en');
	return { autoTranslate: true, autoTranslateLanguage: languageSetting };
}
