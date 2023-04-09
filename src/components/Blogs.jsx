import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import { blogs } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-2 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
           
          </div>
          
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-1'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
            
              <div className=" justify-end "
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <button className="bg-transparent text-white mt-5  font-semibold text-white py-2 px-4 border border-blue-500  rounded">Read More</button>
            </div>
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
       
      </motion.div>

  

      <div className='mt-20 flex flex-wrap gap-7'>
        {blogs.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, "");
