import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ocdcycle from "../assets/OCD.png";
import disease from "../assets/mental_illness.png";

const Services = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesList = [
    "Adult Abuse and Neglect", "Agoraphobia", "Alcohol use disorder", "Anxiety Disorder",
    "Attention deficit hyperactivity disorder in children", "Autism spectrum disorder", "Avoidant Personality Disorder",
    "Bipolar disorder & Related disorder", "Borderline Personality Disorder", "Child Abuse and Neglect",
    "Chronic Illness and Depression", "Cyclothymia cyclothymic disorder", "Delusional Disorder",
    "Dependent Personality Disorder", "Depersonalization Disorder", "Depression (major depressive disorder)",
    "Dissociative Amnesia", "Dissociative Disorders", "Dissociative Identity Disorder",
    "Drug addiction (substance use disorder)", "Elimination Disorders", "Family Dynamics and Issues",
    "Feeding and Eating Disorders", "Gender Dysphoria", "Histrionic Personality Disorder",
    "Hypochondriacal Disorder", "Impulse control disorders", "Kleptomania",
    "Medication-Induced Movement Disorders", "Mental illness", "Mild cognitive impairment (MCI)",
    "Mood disorders", "Narcissistic Personality Disorder", "Narcolepsy", "Neurocognitive Disorders",
    "Neurodevelopmental Disorders",  "Paranoid Personality Disorder",
    "Paraphilic Disorders", "Parasomnia", "Persistent Depressive Disorder", "Personality Disorder",
    "Postpartum depression", "Post-Traumatic Stress Disorder", "Schizoaffective disorder",
    "Schizophrenia Spectrum and Other Psychotic Disorders", "Schizophrenia", "Schizophreniform Disorder",
    "Seasonal Depression", "Seizures", "Self Harm Behaviour", "Separation anxiety disorder",
    "Sexual disorder Sexual dysfunction", "Sleep disorder", "Social anxiety disorder (social phobia)",
    "Somatic Symptom and Related Disorders", "Substance Use Disorder", "Suicide and suicidal thoughts",
    "Trauma and Stress-related Disorders"
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="bg-white shadow-lg rounded-lg border border-blue-200 p-6">
            <img
              src={disease} // Replace this with the actual path or imported image
              alt="OCD Illustration"
              className="w-full max-w-md mx-auto mb-6 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">OCD</h3>
            <p className="text-lg text-gray-800">
              <strong>Obsessive-Compulsive Disorder (OCD)</strong> is a chronic mental health condition characterized by persistent, intrusive thoughts (<strong>obsessions</strong>) and repetitive behaviors or mental acts (<strong>compulsions</strong>) performed to reduce anxiety.
            </p>

            <h4 className="text-xl font-bold text-blue-700 mt-4">Symptoms of OCD</h4>
            <p className="text-lg text-gray-800">OCD symptoms typically fall into two categories:</p>

            <h5 className="font-semibold text-blue-600">Obsessions</h5>
            <ul className="list-disc list-inside">
              <li>Fear of contamination</li>
              <li>Intrusive thoughts about harm</li>
              <li>Concern about symmetry</li>
              <li>Fear of mistakes</li>
              <li>Disturbing taboo thoughts</li>
            </ul>

            <h5 className="font-semibold text-blue-600 mt-4">Compulsions</h5>
            <ul className="list-disc list-inside">
              <li>Excessive cleaning</li>
              <li>Repeated checking</li>
              <li>Silent repetition</li>
              <li>Object arrangement</li>
              <li>Seeking reassurance</li>
            </ul>

            <h4 className="text-xl font-bold text-blue-700 mt-4">Causes and Risk Factors</h4>
            <ul className="list-disc list-inside text-lg text-gray-800">
              <li><strong>Genetics:</strong> OCD runs in families.</li>
              <li><strong>Brain Function:</strong> Abnormal brain circuits.</li>
              <li><strong>Neurotransmitters:</strong> Serotonin imbalance.</li>
              <li><strong>Environment:</strong> Trauma or infections.</li>
            </ul>

            <h4 className="text-xl font-bold text-blue-700 mt-4">Diagnosis of OCD</h4>
            <ul className="list-disc list-inside text-lg text-gray-800">
              <li>Presence of obsessions and compulsions</li>
              <li>Impact on daily life</li>
              <li>Symptoms lasting over 1 hour/day</li>
            </ul>

            <h4 className="text-xl font-bold text-blue-700 mt-4">Treatment Options</h4>

            <h5 className="font-semibold text-blue-600">CBT</h5>
            <ul className="list-disc list-inside">
              <li><strong>ERP:</strong> Gradual exposure without compulsion.</li>
              <li><strong>Cognitive Therapy:</strong> Identify and challenge thoughts.</li>
            </ul>

            <h5 className="font-semibold text-blue-600 mt-4">Medication</h5>
            <ul className="list-disc list-inside">
              <li><strong>SSRIs:</strong> Fluoxetine, sertraline etc.</li>
              <li><strong>TCAs:</strong> Clomipramine in severe cases.</li>
            </ul>

            <h5 className="font-semibold text-blue-600 mt-4">Advanced Therapies</h5>
            <ul className="list-disc list-inside">
              <li><strong>DBS & TMS:</strong> Used in treatment-resistant cases.</li>
            </ul>

            <h5 className="font-semibold text-blue-600 mt-4">Lifestyle Strategies</h5>
            <ul className="list-disc list-inside">
              <li><strong>Mindfulness, Yoga, Breathing</strong></li>
              <li><strong>Exercise</strong></li>
              <li><strong>Support Groups</strong></li>
            </ul>

            <h4 className="text-xl font-bold text-blue-700 mt-4">Living with OCD</h4>
            <p className="text-lg text-gray-800">
              Early diagnosis, continuous treatment, and support can help people with OCD live fulfilling lives.
            </p>

            <h4 className="text-xl font-bold text-blue-700 mt-4">Conclusion</h4>
            <p className="text-lg text-gray-800">
              OCD is manageable with the right support and care. Awareness, therapy, and medication are key.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-10">
            <img src={ocdcycle} alt="OCD Cycle" className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-full" />

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
                Diseases & Conditions Treated
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {servicesList.map((service, index) => (
                  <div key={index} className="flex items-start gap-2 text-lg text-gray-800">
                    <span className="text-red-600">👉</span>
                    <Link
                      to={`/${service.replace(/\s+/g, '-').toLowerCase()}`}
                      className="hover:underline text-blue-800"
                    >
                      {service}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};
export default Services;
