import React from "react";

const Blog = () => {
	const blogs = [
		{
			image: "https://i.ibb.co/pR8Jhv9/unsplash-Tcl-QHtlkz-Rc.png",
			heading: "Most satisfying Cake decorating Cake ideas",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam.",
		},
		{
			image: "https://i.ibb.co/q1gGdp9/unsplash-Ol-KCes2y1e-A.png",
			heading: "Most satisfying Cake decorating Cake ideas",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam.",
		},
		{
			image: "https://i.ibb.co/QHB5TPw/unsplash-B-j277apk-Pg.png",
			heading: "Most satisfying Cake decorating Cake ideas",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam.",
			
		},
		{
			image: "https://i.ibb.co/3SRqzHh/unsplash-pp88-Aks-N4dg.png",
			heading: "Most satisfying Cake decorating Cake ideas",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam.",
		},
		{
			image: "https://i.ibb.co/NKrnw8J/unsplash-b-ZD6-EO4cx2-U.png",
			heading: "Most satisfying Cake decorating Cake ideas",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam.",
		},
	];
	
	return (
		<section className="">
			<div className="w-[80%] mx-auto">
                    <h1 className="mb-[20px] font-bold">Our blog</h1>
                    <section className="flex justify-between">
                    <div className="flex flex-col gap-4">
                         {
                              blogs.slice(0,2).map((blog, i)=><article className="w-[277px]" key={i}>
                                   <img src={blog.image} alt={blog.heading} />
							<div className="p-2">
								<h1 className="font-medium">{blog.heading}</h1>
								<p className="text-xs text-gray-400">{blog.description}</p>
							</div>
                              </article>)
                         }
                    </div>
				<div>
					{
						blogs.slice(2, 3).map((blog, i)=>
							<article className="flex-1 w-[546px]" key={i}>
                                   <img src={blog.image} alt={blog.heading}  className='w-full'/>
							<div className="p-2">
								<h1 className="font-medium">{blog.heading}</h1>
								<p className="text-xs text-gray-400">{blog.description}</p>
							</div>
                              </article>
						)
					}
				</div>
				<div>
				<div>
					{
						blogs.slice(3, 5).map((blog, i)=>
							<article className="w-[277px]" key={i}>
                                   <img src={blog.image} alt={blog.heading}  className=''/>
							<div className="p-2">
								<h1 className="font-medium">{blog.heading}</h1>
								<p className="text-xs text-gray-400">{blog.description}</p>
							</div>
                              </article>
						)
					}
				</div>
				</div>
                    </section>
               </div>
		</section>
	);
};

export default Blog;
