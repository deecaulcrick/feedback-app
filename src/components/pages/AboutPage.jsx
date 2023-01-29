import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Card from "../shared/Card"
function AboutPage() {
  return (
    <Card>
        <AnimatePresence>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 0.5 }}>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Tristique et egestas quis ipsum suspendisse ultrices gravida. Quam nulla porttitor massa id neque aliquam.</p>
                <p><Link to="/">Back to home</Link></p>
            </motion.div>
        </AnimatePresence>
        
    </Card>
  )
}

export default AboutPage