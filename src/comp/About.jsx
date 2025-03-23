import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-blue-100 min-h-screen text-gray-800 p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8">Dr. Ankit Sinha</h2>
        <div className="text-left max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-black-600 mb-1 underline">Brief Profile</h3>
          <p className="mb-6 text-base md:text-lg leading-relaxed">
            Dr. Ankit Kumar Sinha is a highly skilled psychiatrist with over <b>11 years of experience</b>. He is an expert in assessing, diagnosing, and treating mental health conditions across various age groups. Dr. Sinha excels in using therapeutic communication techniques and has a proven track record in successfully managing patients with <b>Depression, Schizophrenia, Bipolar Disorder, OCD, substance use disorders, and personality disorders</b> using evidence-based therapies like <b>CBT</b> and <b>ERP</b>.
          </p>

          {/* Highlighted Expertise Section */}
          <div className="bg-blue-200 p-8 rounded-lg mb-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-3 underline">Specialized Expertise</h3>
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              Dr. Ankit Sinha is a distinguished specialist in the treatment of <b>Obsessive-Compulsive Disorder (OCD)</b>, utilizing <b>Exposure and Response Prevention (ERP)</b>—the gold-standard, evidence-based therapy for OCD. With extensive expertise in <b>De-addiction</b>, Dr. Sinha also provides comprehensive, structured interventions to help individuals overcome substance dependence, fostering long-term recovery and well-being. His commitment to <b>evidence-based treatment</b> and <b>patient-centered care</b> ensures the highest standard of therapeutic excellence.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-black-600 mb-1 underline">Professional Qualifications</h3>
          <ul className="list-disc ml-6 mb-6 text-base md:text-lg leading-relaxed">
            <li>MBBS</li>
            <li><b>MD (Psychiatry) from PGIMER, Chandigarh</b></li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold text-black-600 mb-1 underline">Additional Training and Certification</h3>
          <ul className="list-disc ml-6 mb-6 text-base md:text-lg leading-relaxed">
            <li>Certified for the Instruction Course in Biostatistics Research Methodology (2020)</li>
            <li>Certified by NHS, Health Education England for Alcohol and Tobacco Brief Interventions (2018)</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold text-black-600 mb-1 underline">Previous Work Experience</h3>
          <ul className="list-disc ml-6 mb-6 text-base md:text-lg leading-relaxed">
            <li>Junior Resident, <b>Department of Psychiatry, PGI, Chandigarh (2017-2020)</b></li>
            <li>Senior Resident, <b>Department of Psychiatry, AIIMS, Bhubaneswar (2021-2024)</b></li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold text-black-600 mb-1 underline">Awards and Achievements</h3>
          <ul className="list-disc ml-6 mb-6 text-base md:text-lg leading-relaxed">
            <li><b>1st prize</b> in poster presentation on "A walk on thorns: motivating and resilience in addiction management" at 31st Annual Conference of IPS, Odisha</li>
            <li>Awarded a scholarship to attend the INEBRIA International Conference, Edinburgh, UK</li>
            <li>Participated in poster presentation at IAWMH-2022 conference, Maastricht, Netherlands</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold text-black-600 mb-1 underline">Speciality-related Achievements</h3>
          <ul className="list-disc ml-6 mb-6 text-base md:text-lg leading-relaxed">
            <li>Delivered 80 rTMS sessions under supervision (2017-2020)</li>
            <li>Conducted research on Exposure Response Prevention (ERP) for OCD management</li>
            <li>Organized a webinar on "Role of Nutrition in physical and mental health of women"</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold text-black-600 mb-1 underline">Research and Publications</h3>
          <p className="mb-6 text-base md:text-lg leading-relaxed">
            Authored and co-authored several publications in peer-reviewed journals, including Asian J Psychiatry, Cureus, Industrial Psychiatry Journal, Indian J Soc Psychiatry, and Journal of Indian Association for Child and Adolescent Mental Health.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-black-600 mb-1 underline">Registration with Professional Bodies</h3>
          <ul className="list-disc ml-6 mb-6 text-base md:text-lg leading-relaxed">
            <li>Delhi Medical Council (DMC) registration</li>
            <li>Tamil Nadu Medical Council (TNMC)</li>
            <li>Member of Indian Psychiatric Society (IPS)</li>
            <li>Member of International Network on Brief Interventions for Alcohol and Other Drugs (INEBRIA)</li>
            <li>Member of International Society of Substance Use Professionals (ISSUP)</li>
          </ul>

          <Link
            to="https://wa.link/7bg5uc"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg animate-pulse hover:animate-none inline-block text-base md:text-lg"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
