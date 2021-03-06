;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-text': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					filter: Liferay.AUI.getFilterConfig(),
					modules: {
						'liferay-ddm-form-field-text': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'text_field.js',
							requires: [
								'aui-autosize-deprecated',
								'aui-tooltip',
								'autocomplete',
								'autocomplete-highlighters',
								'autocomplete-highlighters-accentfold',
								'liferay-ddm-form-renderer-field'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();