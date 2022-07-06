import '../components/Header.css';

const Header = () => {
	return (
		<div className="headerContainer wrap">
			<div className="left"></div>
			<div className="right">
				<h1 className="title">Next generation digital banking</h1>
				<p className="sub-title">
					Take your financial life online. Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing, and much
					more.
				</p>
				<div>
					<div className="p-2 text-start"><button className="btnRequest">Request Invite</button></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
