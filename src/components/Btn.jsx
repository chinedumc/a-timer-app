const Btn = ({ children, className, disabled, onClick,ref }) => {
	return (
		<button ref={ref} className={className} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
};

export default Btn;
