import React from "react";

const Contact = () => {
	const inputStyles = "outline-none border-none rounded  h-14 w-full px-3 placeholder:text-start";
	return (
		<section className="mt-[80px] bg-[#F7F8FA] py-20 px-4 pb-[90px] md:pb-0">
			<div className="w-full md:w-[80%] mx-auto flex md:flex-row  gap-8  justify-between flex-col-reverse">
				{/* left side */}
				<div>
					{/* heading */}
					<div className="flex flex-col gap-2 mb-6">
						<h1 className="text-2xl font-medium">
							Do you have a question <br /> or want to become a seller?
						</h1>
						<p>Fill this form and our manage will contact you next 48 hours</p>
					</div>
					{/* form */}
					<div className="flex flex-col w-full gap-4">
						<div className="flex w-full gap-2">
							<input className={inputStyles} type="text" placeholder="Your name"/>
							<input className={inputStyles} type="text" placeholder="Your-email"/>
						</div>
						<div className="w-full">
							<input className={`${inputStyles} h-[215px] pb-[160px]`} type="text" placeholder="Your message"/>
						</div>
					</div>
				</div>
				{/* right image */}
				<div className="max-w-[503px] ">
					<img src="https://i.ibb.co/QnD96Cm/Food-delivery-cute-man-riding-motorcycles-cartoon-art-illustration-2.png" alt="deliveryBoy" />
				</div>
			</div>
		</section>
	);
};

export default Contact;
