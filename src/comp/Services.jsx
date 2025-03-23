import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import animation library
import { useEffect, useState } from "react"; // Import useEffect and useState
import { FaArrowUp } from "react-icons/fa"; // Import icon for the arrow button
import ocdcycle from "../assets/OCD.png"; // OCD Cycle image

const Services = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300); // Show button after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  const servicesList = [
    "Adult Abuse and Neglect",
    "Agoraphobia",
    "Alcohol use disorder",
    "Anxiety Disorder",
    "Attention deficit hyperactivity disorder in children",
    "Autism spectrum disorder",
    "Avoidant Personality Disorder",
    "Bipolar disorder & Related disorder",
    "Borderline Personality Disorder",
    "Child Abuse and Neglect",
    "Chronic Illness and Depression",
    "Cyclothymia cyclothymic disorder",
    "Delusional Disorder",
    "Dependent Personality Disorder",
    "Depersonalization Disorder",
    "Depression (major depressive disorder)",
    "Dissociative Amnesia",
    "Dissociative Disorders",
    "Dissociative Identity Disorder",
    "Drug addiction (substance use disorder)",
    "Elimination Disorders",
    "Family Dynamics and Issues",
    "Feeding and Eating Disorders",
    "Gender Dysphoria",
    "Histrionic Personality Disorder",
    "Hypochondriacal Disorder",
    "Impulse control disorders",
    "Kleptomania",
    "Medication-Induced Movement Disorders",
    "Mental illness",
    "Mild cognitive impairment (MCI)",
    "Mood disorders",
    "Narcissistic Personality Disorder",
    "Narcolepsy",
    "Neurocognitive Disorders",
    "Neurodevelopmental Disorders",
    "Obsessive-Compulsive and Related Disorders",
    "Paranoid Personality Disorder",
    "Paraphilic Disorders",
    "Parasomnia",
    "Persistent Depressive Disorder",
    "Personality Disorder",
    "Postpartum depression",
    "Post-Traumatic Stress Disorder",
    "Schizoaffective disorder",
    "Schizophrenia Spectrum and Other Psychotic Disorders",
    "Schizophrenia",
    "Schizophreniform Disorder",
    "Seasonal Depression",
    "Seizures",
    "Self Harm Behaviour",
    "Separation anxiety disorder",
    "Sexual disorder Sexual dysfunction",
    "Sleep disorder",
    "Social anxiety disorder (social phobia)",
    "Somatic Symptom and Related Disorders",
    "Substance Use Disorder",
    "Suicide and suicidal thoughts",
    "Trauma and Stress-related Disorders"
  ];

  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        {/* Expertise, OCD Info, and Diseases Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-start">
          {/* Left Side: Expertise and OCD Info */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col justify-center"
          >
            <div className="bg-white shadow-lg rounded-lg border border-blue-200 p-6 w-full h-full flex flex-col justify-center">
              {/* OCD Video Section */}
              <div className="w-full">
                <h4 className="text-4xl font-semibold text-center text-blue-700 mb-4">What is OCD?</h4>
                <video
                  className="rounded-lg shadow-lg w-full"
                  controls
                  autoPlay
                  loop
                  poster="/ocd-video-thumbnail.jpg"
                >
                  <source src="/ocd-animation.mp4" type="video/mp4" />
                  <source src="/ocd-animation.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-4 text-center">
                <Link to="https://wa.link/7bg5uc" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg animate-pulse hover:animate-none">
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Detailed Note About OCD */}
            <div className="mt-8 bg-white shadow-lg rounded-lg border border-blue-200 p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center"> OCD</h3>
              <p className="text-lg text-gray-800">
                <strong>Obsessive-Compulsive Disorder (OCD)</strong> is a chronic mental health condition characterized by persistent, intrusive thoughts (<strong>obsessions</strong>) and repetitive behaviors or mental acts (<strong>compulsions</strong>) performed to reduce anxiety. These symptoms can significantly interfere with daily life, relationships, and overall well-being.
              </p>

              <h4 className="text-xl font-bold text-blue-700 mt-4">Symptoms of OCD</h4>
              <p className="text-lg text-gray-800">OCD symptoms typically fall into two categories:</p>

              <h5 className="font-semibold text-blue-600">Obsessions</h5>
              <ul className="list-disc list-inside">
                <li>Fear of contamination (germs, dirt, or illness)</li>
                <li>Intrusive thoughts about harming oneself or others</li>
                <li>Excessive concern about symmetry, order, or exactness</li>
                <li>Fear of making mistakes or forgetting something important</li>
                <li>Disturbing sexual, religious, or taboo thoughts</li>
              </ul>

              <h5 className="font-semibold text-blue-600 mt-4">Compulsions</h5>
              <ul className="list-disc list-inside">
                <li>Excessive handwashing or cleaning</li>
                <li>Repeatedly checking doors, locks, or appliances</li>
                <li>Counting or repeating words silently</li>
                <li>Arranging objects in a particular order</li>
                <li>Seeking reassurance from others</li>
              </ul>

              <h4 className="text-xl font-bold text-blue-700 mt-4">Causes and Risk Factors</h4>
              <p className="text-lg text-gray-800">
                The exact cause of OCD is not fully understood, but several factors may contribute to its development:
              </p>
              <ul className="list-disc list-inside">
                <li><strong>Genetics:</strong> OCD tends to run in families, suggesting a hereditary component.</li>
                <li><strong>Brain Structure and Functioning:</strong> Abnormalities in brain circuits, particularly in areas regulating fear and decision-making, may play a role.</li>
                <li><strong>Neurotransmitters:</strong> Imbalances in serotonin, a neurotransmitter responsible for mood regulation, have been linked to OCD.</li>
                <li><strong>Environmental Factors:</strong> Traumatic events, childhood abuse, or infections (such as Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections – PANDAS) can trigger or worsen OCD symptoms.</li>
              </ul>

              <h4 className="text-xl font-bold text-blue-700 mt-4">Diagnosis of OCD</h4>
              <p className="text-lg text-gray-800">
                OCD is diagnosed based on clinical evaluation using criteria outlined in the <strong>Diagnostic and Statistical Manual of Mental Disorders (DSM-5)</strong>. Mental health professionals assess:
              </p>
              <ul className="list-disc list-inside">
                <li>The presence of obsessions and compulsions</li>
                <li>The extent to which these symptoms interfere with daily functioning</li>
                <li>The duration and persistence of symptoms (typically more than one hour per day)</li>
              </ul>

              <h4 className="text-xl font-bold text-blue-700 mt-4">Treatment Options</h4>
              <p className="text-lg text-gray-800">Effective treatments for OCD include:</p>

              <h5 className="font-semibold text-blue-600">Cognitive-Behavioral Therapy (CBT)</h5>
              <ul className="list-disc list-inside">
                <li><strong>Exposure and Response Prevention (ERP):</strong> The gold-standard therapy for OCD, ERP involves gradually exposing individuals to feared thoughts or situations while preventing compulsive behaviors. Over time, this reduces anxiety and breaks the cycle of OCD.</li>
                <li><strong>Cognitive Therapy:</strong> Helps individuals recognize and challenge irrational thoughts related to OCD.</li>
              </ul>

              <h5 className="font-semibold text-blue-600 mt-4">Medication</h5>
              <ul className="list-disc list-inside">
                <li><strong>Selective Serotonin Reuptake Inhibitors (SSRIs):</strong> Medications such as fluoxetine, fluvoxamine, and sertraline are commonly prescribed to reduce OCD symptoms.</li>
                <li><strong>Tricyclic Antidepressants:</strong> In severe cases, clomipramine or other medications may be used.</li>
              </ul>

              <h5 className="font-semibold text-blue-600 mt-4">Advanced Therapies</h5>
              <ul className="list-disc list-inside">
                <li><strong>Deep Brain Stimulation (DBS) & Transcranial Magnetic Stimulation (TMS):</strong> In treatment-resistant OCD cases, these neuromodulation techniques may be considered to regulate abnormal brain activity.</li>
              </ul>

              <h5 className="font-semibold text-blue-600 mt-4">Lifestyle Changes and Self-Help Strategies</h5>
              <ul className="list-disc list-inside">
                <li><strong>Mindfulness and Relaxation Techniques:</strong> Practicing meditation, yoga, or breathing exercises can help manage anxiety.</li>
                <li><strong>Regular Exercise:</strong> Physical activity has been shown to improve mood and reduce OCD symptoms.</li>
                <li><strong>Support Groups:</strong> Connecting with others who have OCD can provide emotional support and coping strategies.</li>
              </ul>

              <h4 className="text-xl font-bold text-blue-700 mt-4">Living with OCD</h4>
              <p className="text-lg text-gray-800">
                OCD is a manageable condition, but it requires ongoing effort and treatment. Early intervention, a strong support system, and adherence to therapy can significantly improve quality of life. With proper care, many individuals with OCD can lead fulfilling and productive lives.
              </p>

              <h4 className="text-xl font-bold text-blue-700 mt-4">Conclusion</h4>
              <p className="text-lg text-gray-800">
                Obsessive-Compulsive Disorder is a serious mental health condition that affects millions worldwide. Understanding its symptoms, causes, and treatment options is crucial for those affected. With advances in therapy and medication, individuals with OCD can regain control over their lives and reduce the impact of the disorder.
              </p>

            </div>
          </motion.div>

          {/* Right Side: Diseases & Video Section */}
          <div className="w-full flex flex-col gap-8">

            <div>
              <img src={ocdcycle} alt="OCD-Cycle" className=" mx-auto transform transition-all" />
            </div>
            {/* Diseases & Conditions Treated Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center whitespace-nowrap">
                Diseases & Conditions Treated
              </h2>

              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="text-lg text-gray-800">
                  {servicesList.slice(0, Math.ceil(servicesList.length / 2)).map((service, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <span className="text-red-600 mr-2">👉</span>
                      <Link to={`/${service.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline text-blue-800">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="text-lg text-gray-800">
                  {servicesList.slice(Math.ceil(servicesList.length / 2)).map((service, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <span className="text-red-600 mr-2">👉</span>
                      <Link to={`/${service.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline text-blue-800">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
