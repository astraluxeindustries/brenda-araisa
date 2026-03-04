import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Brenda Araisa" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Brenda Araisa
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Brenda is a lifelong resident of Patterson and a proud graduate of California State University, Stanislaus. Her deep roots in the community give her a strong understanding of the local housing market and the people who call the area home. After gaining experience as a Mortgage Loan Originator Assistant, Brenda went on to become a licensed loan originator, building on her hands on industry knowledge to better serve clients navigating the home financing process.
              </p>
              <p>
                Brenda is passionate about simplifying the mortgage experience and helping clients clearly understand their options. She enjoys breaking down complex lending terminology and guiding borrowers through each step with patience and transparency. Whether someone is purchasing their first home, upgrading to a new property, investing in real estate, or refinancing an existing loan, Brenda works to ensure her clients feel confident and informed throughout the process.
              </p>
              <p>
                Her approach is centered around listening carefully to each client’s goals and identifying loan programs that align with their needs. Brenda believes that every homebuyer deserves personalized guidance and thoughtful communication when making one of the most important financial decisions of their lives. She strives to create a smooth and supportive experience that helps clients move forward with confidence.
              </p>
              <p>
                At Generations Home Loans, Brenda takes great pride in representing both her clients and her company with honesty, professionalism, and dedication. Helping individuals and families achieve the dream of homeownership is what motivates her every day, and she is always happy to answer questions and provide guidance for those beginning their home financing journey.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
