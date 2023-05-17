import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-ourteam-teammember uncommon-ourteam-teammember--visual',
    }) }>
      <div className='uncommon-ourteam-teammember-name'>
        {attributes.name}
      </div>
      <div className='uncommon-ourteam-teammember-title'>
        {attributes.title}
      </div>
      <div className='uncommon-ourteam-teammember-images'>
        <InnerBlocks.Content />
      </div>
		</div>
	);
}
