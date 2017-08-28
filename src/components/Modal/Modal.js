import React from 'react';

export default ({children})=>(
	<div className="modal">
		<div className="modal-background"></div>
		<div className="modal-content">
			{/* Modal Content Here */}
			{children}
		</div>
		<button className="modal-close is-large" aria-label="close"></button>
	</div>
)