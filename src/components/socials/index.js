import { Icon } from 'semantic-ui-react';
import './index.css';

const Socials = () => {
    const MailLink = "mailto:rohandeshpande832@gmail.com"
    const GitHubLink = "https://github.com/Rohan2002";
    const LinkedinLink = "https://www.linkedin.com/in/rohan-deshpande-2002/";
    const BlogLink = "https://r0han-dev.mataroa.blog/";
    const resumeLink = "/Rohan-Deshpande-Resume.pdf";
    
    return (
        <div className="social-container">
            <a target="_blank" rel="noreferrer" href={MailLink}>
                <Icon className="icon-design" link size='big' name='mail' />
            </a>
            <a target="_blank" rel="noreferrer" href={GitHubLink}>
                <Icon className="icon-design" link size='big' name='github' />
            </a>
            <a target="_blank" rel="noreferrer" href={LinkedinLink}>
                <Icon className="icon-design" link size='big' name='linkedin' />
            </a>
            <a target="_blank" rel="noreferrer" href={BlogLink}>
                <Icon className="icon-design" link size='big' name='blogger' />
            </a>
            <a target="_blank" rel="noreferrer" href={resumeLink}>
                <Icon className="icon-design" link size='big' name='file' />
            </a>
        </div>
    );
}
export default Socials;