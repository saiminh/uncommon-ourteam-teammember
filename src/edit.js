import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-ourteam-teammember',
    }) }>
      <TextControl
        label={__('Name', 'uncommon-ourteam')}
        value={attributes.name}
        onChange={(name) => setAttributes({ name })}
      />
      <TextControl
        label={__('Title', 'uncommon-ourteam')}
        value={attributes.title}
        onChange={(title) => setAttributes({ title })}
      />
			<InnerBlocks 
        allowedBlocks={['core/image']}
        template={[
          ['core/image', {className: 'uncommon-ourteam-teammember-portrait', label: 'portrait'}],
          ['core/image', {className: 'uncommon-ourteam-teammember-artwork', label: 'artwork'}]
        ]}
        templateLock={'all'}
      />
		</div>
	);
}
