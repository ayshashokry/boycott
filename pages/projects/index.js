import homeStyles from "../../styles/Home.module.scss";
import styles from "../../styles/projects.module.scss";
import Head from "next/head";
import ProjectDetails from "../../components/ProjectDetails";
import { Button } from "antd";
import Link from "next/link";

export default function Projects(props) {
  const websites = [
    {
      name: "Training system",
      demo: "http://194.163.177.27/training-system/",
      repo: null,
      img: "https://lh3.googleusercontent.com/OgWzejafqwamLMMRJ9sFtkglDsv9EcT3DbTOxqz9xDbKNBZJiOtFkKcomnIOaFcZ3co=w2400",
      data: "it's a training system that shows courses, coaches, and trainees, you can create an account to attend classes and get certificates.",
      role: "UI development",
      userData: { username: "admin@admin.com", password: "P@$$w0rd@a" },
    },
    {
      name: "Decision Support Systems",
      demo: "http://194.163.177.27/fron/",
      repo: null,
      img: "https://lh5.googleusercontent.com/M_gtO49L0yQ3v3zyvJDRy1mQsAUlr897KMnKd_RwLpeY0SzxMAMO8crpm5Dq4LFAeUo=w2400",
      data: "website for an indicator developed by Simon Anholt and implemented by Ipsos. It aims to identify the impressions of individuals from (20) countries and their opinions about (60) countries in the world, within six general axes in all, and it has been implemented annually since 2008.",
      role: "UI development",
    },
    {
      name: "Engineering Approval Companies",
      demo: "https://webgis.eamana.gov.sa/engApproval/",
      repo: null,
      img: "https://lh3.googleusercontent.com/GG-R76fD1P5JtAZpYItQTb2TSdwxGij2RMH8cPwyPX6scmmxzGDpKlloxxj8PYg4SAg=w2400",
      data: "This website belongs to eastern Portal and is used to create an engineering office account, edit existing accounts and view all office data and approve or cancel requests as an admin.",
      role: "UI/UX development",
    },
    {
      name: "Eastern Portal",
      demo: "http://77.30.168.86/home/",
      repo: null,
      img: "https://lh5.googleusercontent.com/qlwT0GHQszLs9aiX0w3Sh3So1wFDLwqdQ5rPVs3FP0vlDHC4FYZqbOPIOKUXYdd8lTc=w2400",
      data: "It is an electronic portal that includes several electronic services for the General Administration of Geographic Information Systems. ",
      role: "UI/UX development",
    },
    {
      name: "Riyadh Portal",
      demo: "http://77.30.168.86/homery/",
      repo: null,
      img: "https://lh3.googleusercontent.com/gWZm9E2CnN-yYf3oS59vVbRvDKi7yD0M6PU51BXb5jeWUSKKJTTcHg54JWRmxnCxBjk=w2400",
      data: "The electronic services portal is an electronic portal through which citizens, residents, companies and government agencies from anywhere can access the services of the Riyadh Municipality and carry out transactions with them quickly and efficiently, as it is considered the gateway to the municipality's electronic services. ",
      role: "UI/UX development",
    },
    {
      name: "Akhdar Makkah",
      demo: "http://77.30.168.84/greenmakkah/",
      repo: null,
      img: "https://lh5.googleusercontent.com/MWyk6Z_sQOp7-TmeoYa3u6UYJXobeSdDPRWEwj2Fkl2TnWm_E9cxp_idncd84dYtDik=w2400",
      data: "The Green Makkah Project is part of the Saudi Green Initiative, which consolidates the direction of the Kingdom and the region in protecting land and nature and placing it in a road map with clear landmarks that contribute strongly to achieving a sustainable environment. The initiative also aims to expand the green areas in the region and rehabilitate the vegetation cover.",
      role: "UI/UX development",
    },
  
    {
      name: "Mahamy",
      demo: "http://77.30.168.86/mahamy/",
      repo: null,
      img: "https://lh4.googleusercontent.com/M_sKYNPY4RxVX2LoUmxuBaWlztIVl_UjdOf-Ud-mQaK8UhYZzhtYGdlpbrOk-GXGzd4=w2400",
      data: "Mahamy is a task manager website to add, arrange and manage employee tasks.",
      role: "UI/UX development",
      userData: { username: "mman1", password: "Aa123456@a" },
    },

    {
      name: "Pretty Woman",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: "https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
      role: "UI/UX development",
    },
    {
      name: "Bobian Elevators",
      demo: "https://bobian-elevators-kze5.vercel.app/",
      repo: "https://github.com/ayshashokry/BobianElevators",
      img: "https://drive.google.com/uc?id=1afgYQHtfCDEnZ4bmKwsgUHH2iDbbsWo0",
      data: "Bobian company offers this website for users to have a look at the company's elevators products online. ",
      role: "UI/UX development ",
    },
    {
      name: "The business hub",
      demo: "https://tbh-1.vercel.app/",
      repo: "https://github.com/ayshashokry/tbh1",
      img: "https://lh6.googleusercontent.com/u--pxOK46_vru_FjaTIk-WdFkOetqz742V-EE9XW-amRADbf5sNkEDmXavcBhN8E5R8=w2400",
      data: "The business hub is a website for a coworking space, that shows place photos, location on the map, and contacts.  ",
      role: "UI/UX development",
    },
    {
      name: "Lirten website#1",
      demo: "https://lirten-1.vercel.app/",
      repo: "https://github.com/ayshashokry/Lirten-1",
      img: "https://lh5.googleusercontent.com/vkxgvn4GSmxQSHea_9y6c7WisSnkWjm315F_QlKNF94trYyhgAh7Z-chZaZGLfXu6Qk=w2400",
      data: "Lirten empowers businesses to break into the digital age through providing professional software solutions. ",
      role: "UI/UX development",
    },
    {
      name: "Lirten website#2",
      demo: "https://lirten-2.vercel.app/",
      repo: "https://github.com/ayshashokry/Lirten-2",
      img: "https://lh3.googleusercontent.com/h9VQmr0esrcZcrdFirJ_9cInCfdwhrmZFahsqXnvHqxhBYQF5fFMWc5LvqwckBIfmUY=w2400",
      data: "Integrated Creative Technologies is our unique methodology of approaching any business problem in a creative manner to create a solution that lasts. We use such a methodology to help people with vision find their unique voice and their appropriate touchpoints. ",
      role: "UI/UX development",
    },
    {
      name: "Fly Pyramids",
      demo: "https://fly-pyramids.vercel.app/",
      repo: "https://github.com/ayshashokry/Fly-Pyramids",
      img: "https://lh6.googleusercontent.com/s4BPcVOXeKAInTA37-WFPIldlnSmbvTNzfOv6e6Sf4QqhHbl2cc1ORIxbWo7we2B_FM=w2400",
      data: "Fly Pyramid is consisted of a group aviation enthusiasts who have a passion to evolve the air transport field and to provide high standard transport services to clients worldwide. Their team consists of aviation experts specialized in every field to contribute to the success and growth in the Middle East, Europe, and African Continents. ",
      role: "UI/UX development",
    },
    {
      name: "Al-Dawoudy",
      demo: "https://dawoudyy.vercel.app/",
      repo: "https://github.com/ayshashokry/Dawoudyy",
      img: "https://lh4.googleusercontent.com/SITmxBh7sIm5I2cWMEn1E8sSZjw8gopArExw8jVrIp6kVVOevJ5n7kUu6fON34H4b2Q=w2400",
      data: "A long established company By Mr. Mostafa Ahmed Eldawody since 1984 in Portsaid, Damietta and Alexandira. They are market leaders and experts in their field as they excel at creating innovative solution designe t fulfill or exceed our customers’ needs, overcome obstacles and utilize resources in the most productive way.",
      role: "UI/UX development",
    },
    // {
    //   name: "OTIC",
    //   demo: "https://otic-avi.vercel.app/",
    //   repo: "https://github.com/ayshashokry/OTIC-AVI",
    //   img: "https://lh6.googleusercontent.com/WpZOjZpoSuHdDlmxlV6DZfyRbb4cY67nJc_ItDT9bEFQHUfrjC7V9U8VVMGPtyU0_1U=w2400",
    //   data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    //   role: "UI development",
    // },
    // {
    //   name: "Elesol",
    //   demo: "https://otic-avi.vercel.app/",
    //   repo: "https://github.com/ayshashokry/OTIC-AVI",
    //   img: "https://lh6.googleusercontent.com/dlF3pWEMfpxqCdGdmAiHdB_wNLTFMyi_Z8Qk00IicLgFx2UhPVP-2I5rgGWL9Lq5DoE=w2400",
    //   data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    //   role: "UI development",
    // },
    {
      name: "Home Made",
      demo: "https://home-made.vercel.app/",
      repo: "https://github.com/ayshashokry/homemade",
      img: "https://lh5.googleusercontent.com/hMMUp48zlo4VgOLB48O2VQZA4oF8rJvpFLcIzVLaQyMM1A_z4iMsBB6nIuwxTspTpVc=w2400",
      data: "Home Made is a website for users to have a look at the products online. ",
      role: "UI development",
    },
    {
      name: "My Reads",
      demo: "https://my-reads-delta-three.vercel.app/",
      repo: "https://github.com/ayshashokry/myreads",
      img: "https://lh3.googleusercontent.com/_itcjzRuRlhJMFIBkDHhe_86zb4SUKth7r83bR0hyEgoD8OY26YzyPs0o4RfJEWWbxY=w2400",
      data: "My reads shows some books and shelfs, user can change the book's shelf and search for a book. ",
      role: "UI/UX development",
    },
    {
      name: "Bezel",
      demo: "https://bezel-chi.vercel.app/",
      repo: "https://github.com/ayshashokry/bezel",
      img: "https://lh3.googleusercontent.com/0bYZhkaKXyyRxrTjy68x10E92a41dkg4lg3yD4RXvDub-a7aFpnA5K6zGtcRG7WqR1E=w2400",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
    {
      name: "U-Code",
      demo: "https://u-code.vercel.app/",
      repo: "https://github.com/ayshashokry/u-code",
      img: "https://lh3.googleusercontent.com/rb8tXnr-43zBCqg_5QlhQiwePhOg0SBMstAyKsX6JSI-Bo-NDxHULhAb3LpalJGisHs=w2400",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
    {
      name: "Angora",
      demo: "https://angora1.vercel.app/",
      repo: "https://github.com/ayshashokry/Angora1",
      img: "https://lh6.googleusercontent.com/ZFZk4W0L5puMCN8-UPJVU8Ut2qpZkyc9EhYPTIBhW3HR0hTXo0z4BvgZy0DFLA9l_w0=w2400",
      data: "It's a template for a company website. ",
      role: "UI development",
    },

    {
      name: "Fokir",
      demo: "https://fokir-omega.vercel.app/",
      repo: "https://github.com/ayshashokry/fokir",
      img: "https://lh4.googleusercontent.com/j2rSiSsF-_J0Md8H5b8xkjzMZbLpjVfXbLEVugWYhpj8NmqedXutbLqVEJqrTtNCzy0=w2400",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
    {
      name: "Engage",
      demo: "https://engage-topaz.vercel.app/",
      repo: "https://github.com/ayshashokry/engage",
      img: "https://lh5.googleusercontent.com/gi6Ad1eWhkM51KKJVCLDMN-hNjMyiYvr44-is2wWY7Ky4aLeCdQXMFBgl-P_5uksfM0=w2400",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
    {
      name: "Start Bootstrap",
      demo: "https://start-bootstrap.vercel.app/",
      repo: "https://github.com/ayshashokry/Start-Bootstrap",
      img: "https://lh6.googleusercontent.com/xVR-9PxYEUBo5WC4NiTYWaqISLNUZ9xxVSm_k-des2k6BWq2gIMOw19wwtUCCGvK6V4=w2400",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
  ];
  const websitesToShow = props.homePage ? websites.slice(0, 4) : websites;
  return (
    <div className={styles.main} id={!props.homePage && styles.projMain}>
      {!props.homePage && (
        <Head>
          <title>Projects</title>
        </Head>
      )}
      <h4 className={styles.mainTitle}>Some Websites I’ve Built</h4>
      {props.homePage && (
        <div style={{ textAlign: "center" }}>
          <Link href="/projects">
            <Button className={styles.allProjBtn}> View all projects</Button>
          </Link>
        </div>
      )}
      <div className={styles.projectsDiv}>
        {websitesToShow.map((w, index) => (
          <div key={index}>
            <ProjectDetails website={w} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
