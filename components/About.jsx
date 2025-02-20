import Container from "@/components/Container";
import Certificate from "@/components/Certificate";

import Image from "next/image";
import Link from "next/link";
// import ProjectCard from "@/components/ProjectCard";

const About = () => {
  return (
    <section className="my-32" id="about">
      <Container>
        <div className="flex items-center mb-10 pt-8 justify-between">
          <h4 className="font-medium">About</h4>
          <div className="flex gap-8 md:text-base">
            <span className="w-14 h-[2px] mt-3 bg-black"></span>
            <p className="font-medium">02</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="flex flex-col gap-6 col-span-4">
            <p>
              I am a passionate Data Scientist and AI Engineer with a deep
              commitment to leveraging machine learning, deep learning, and
              artificial intelligence to solve real-world problems. With over
              two years of experience, I have worked extensively on LLMs, NLP,
              RAG-based systems, speech-to-text, and computer vision,
              particularly in the healthcare industry and beyond.
            </p>
            <p>
              Through hands-on experience in model development, data processing,
              and scalable AI deployment, I have built and fine-tuned AI models
              that drive innovation and efficiency. My expertise extends to
              developing intelligent systems, optimizing data pipelines, and
              integrating AI solutions into real-world applications.
            </p>
            <p>
              In this portfolio, you’ll find a showcase of my projects, research
              contributions, and technical achievements, highlighting my ability
              to bridge theoretical AI concepts with practical implementation.
              My journey is driven by continuous learning, experimentation, and
              collaboration, ensuring that I stay ahead in this fast-evolving
              field.
            </p>
            <p>
              I am always eager to explore new opportunities, collaborations,
              and challenges that push the boundaries of AI and machine
              learning. Let’s connect and build the future of AI together! 🚀
            </p>
          </div>
          <div className="max-w-[250px] w-full row-start-1 md:row-auto md:ml-auto aspect-square rounded-3xl overflow-hidden col-span-2">
            <Image
              className="w-full h-full object-cover"
              src="/picture.JPG"
              width={500}
              height={600}
              alt=""
            />
          </div>
        </div>

        {/* skills */}
        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2">
          <div>
            <h3 className="font-medium text-3xl mb-4">Expertise</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-4 text-lg max-w-sm">
              <li>Machine Learning (ML)</li>
              <li>Deep Learning (DL)</li>
              <li>Large Language Models (LLMs)</li>
              <li>Retrieval-Augmented Generation (RAG)</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Speech-to-Text Processing</li>
              <li>Computer Vision (CV)</li>
              <li>Data Processing & ETL</li>
              <li>Data Analysis & Visualization</li>
              <li>Model Deployment & Scaling</li>
              <li>API Development</li>
              <li>Feature Engineering</li>
              <li>MLOps & Model Monitoring</li>
              <li>Hyperparameter Tuning</li>
              <li>Vector Search & Semantic Retrieval</li>
              <li>AI-Powered Search Systems</li>
              <li>Reinforcement Learning (RL)</li>
              <li>Data Pipeline Optimization</li>
              <li>Cloud Computing & AI Infrastructure</li>
              <li>Version Control & CI/CD for ML</li>
              <li>Agentic AI</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-3xl mb-4">Tools</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-4 text-lg max-w-sm">
              <li>VS Code</li>
              <li>Android Studio</li>
              <li>Jupyter Notebook</li>
              <li>Google Collaboratory</li>
              <li>Qt Creator</li>
              <li>SQL Server</li>
              <li>Git</li>
              <li>IBM Watson Studio</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Scikit-Learn</li>
              <li>Hugging Face Transformers</li>
              <li>spaCy</li>
              <li>NLTK</li>
              <li>OpenCV</li>
              <li>FastAPI</li>
              <li>Flask</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Redis</li>
              <li>Elasticsearch</li>
              <li>FAISS</li>
              <li>Pinecone</li>
              <li>Weaviate</li>
              <li>Milvus</li>
              <li>MLflow</li>
              <li>DVC</li>
              <li>Airflow</li>
              <li>Prefect</li>
              <li>Ray Tune</li>
              <li>CrewAI</li>
              <li>Streamlit</li>
              <li>Gradio</li>
              <li>Weights & Biases</li>
              <li>Google Cloud AI</li>
              <li>AWS SageMaker</li>
              <li>Azure ML</li>
            </ul>
          </div>
        </div>
        {/* certifications */}
        {/* <div>
          <Certificate />
          <Certificate />
          <Certificate />
        </div> */}
        <div className="mt-20">
          <h3 className="font-medium text-3xl mb-10">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xs sm:max-w-3xl mx-auto">
            <Link
              href="https://coursera.org/share/e20ec001f723ce21798c35747cea0ac0"
              target="_blank"
            >
              <div className="w-full overflow-hidden border-2 group rounded-3xl">
                <Image
                  className="w-full group-hover:scale-105 transition duration-500 h-full object-cover"
                  src="/c1.jpeg"
                  width={920}
                  height={920}
                  alt=""
                />
              </div>
            </Link>
            <Link
              href="https://coursera.org/share/758bb69d704513e39a19388311bbe963"
              target="_blank"
            >
              <div className="w-full group overflow-hidden border-2 rounded-3xl">
                <Image
                  className="w-full group-hover:scale-105 transition duration-500 h-full object-cover"
                  src="/cc2.jpeg"
                  width={920}
                  height={920}
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
