import Layout from "../components/Layouts"
import About from "../components/Layouts/about"
import Feature from "../components/Layouts/feature"
import Footer from "../components/Layouts/footer"
import Header from "../components/Layouts/header"
import Main from "../components/Layouts/main"
import Service from "../components/Layouts/service"

export default function Index() {
  return (
    <Layout pageTitle="Landing page Nextjs">
      <Header/>
      <Main/>
      <Feature/>
      <Service/>
      <About/>
      <Footer/>
    </Layout>
  )
}
