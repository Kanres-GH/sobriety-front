import { useState } from "react";

export default function AddictionListForm() {

    const [addiction, setAddiction] = useState("Select from the list below.")
    function handleClick(e: React.MouseEvent<HTMLLIElement>) {
        setAddiction(e.currentTarget.innerHTML);
    }

    return (
        <>
            <div className="reg-log-main-content-heading">
                <h1 style={{fontWeight: '500', fontSize: '1.6em', textAlign: 'center', letterSpacing: 1.5}}>What kind of addiction do you want to get rid of?</h1>
            </div>
            <p style={{color: 'gray', alignSelf: 'center'}}>You can add more later.</p>
            <span style={{color: '#6de38c', alignSelf: 'center', fontSize: '1.5em', letterSpacing: 1.5, cursor: 'auto'}}>{addiction}</span>
            <div className="reg-log-main-ul">
                <ul className="reg-log-ul" id="addiction-list">
                    <li tabIndex={0} value="alcohol" onClick={handleClick} >Alcohol</li>
                    <li tabIndex={0} value="gambling" onClick={handleClick}>Gambling</li>
                    <li tabIndex={0} value="games" onClick={handleClick}>Video Games</li>
                    <li tabIndex={0} value="cannabis" onClick={handleClick}>Cannabis</li>
                    <li tabIndex={0} value="adderall" onClick={handleClick}>Adderall</li>
                    <li tabIndex={0} value="heroin" onClick={handleClick}>Heroin</li>
                    <li tabIndex={0} value="cocaine" onClick={handleClick}>Cocaine</li>
                    <li tabIndex={0} value="nicotine" onClick={handleClick}>Nicotine</li>
                    <li tabIndex={0} value="amphetamine" onClick={handleClick}>Amphetamine</li>
                    <li tabIndex={0} value="caffeine" onClick={handleClick}>Caffeine</li>
                    <li tabIndex={0} value="tobacco" onClick={handleClick}>Tobacco</li>
                    <li tabIndex={0} value="hallucinogens" onClick={handleClick}>Hallucinogens</li>
                    <li tabIndex={0} value="ecstasy" onClick={handleClick}>Ecstasy</li>
                    <li tabIndex={0} value="shopping" onClick={handleClick}>Shopping</li>
                    <li tabIndex={0} value="codependancy" onClick={handleClick}>Co-dependancy</li>
                    <li tabIndex={0} value="junkfood" onClick={handleClick}>Junk Food</li>
                    <li tabIndex={0} value="fentanyl" onClick={handleClick}>Fentanyl</li>
                    <li tabIndex={0} value="gluten" onClick={handleClick}>Gluten</li>
                    <li tabIndex={0} value="socialmedia" onClick={handleClick}>Social Media</li>
                    <li tabIndex={0} value="ketamine" onClick={handleClick}>Ketamine</li>
                    <li tabIndex={0} value="masturbation" onClick={handleClick}>Masturbation</li>
                    <li tabIndex={0} value="pornography" onClick={handleClick}>Pornography</li>
                    <li tabIndex={0} value="selfharm" onClick={handleClick}>Self-harm</li>
                    <li tabIndex={0} value="sugar" onClick={handleClick}>Sugar</li>
                    <li tabIndex={0} value="vaping" onClick={handleClick}>Vaping</li>
                    <li tabIndex={0} value="xanax" onClick={handleClick}>Xanax</li>
                    <li tabIndex={0} value="ai" onClick={handleClick}>AI chatbots</li>
                    <li tabIndex={0} value="swearing" onClick={handleClick}>Swearing</li>
                    <li tabIndex={0} value="antidepressants" onClick={handleClick}>Antidepressants</li>
                </ul>
            </div>
            
        </>
    );
}