import React from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import Head from "next/head";
import TitleText from "../../components/Text/TitleText";
import SubtitleText from "../../components/Text/SubtitleText";
import ContentText from "../../components/Text/ContentText";

const PrivacyPolicy = () => {
    return (
        <Box
            sx={{}}>
            <Container
                maxWidth={'lg'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    my: 10,
                }}>
                <Head>
                    <title>
                        Privacy Policy
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'}>
                    Privacy Policy
                </Typography>
            </Container>

            <Container
                disableGutters={true}
                sx={{
                    // border: '2px solid green',
                    px: 2,
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent:'center',
                    flexDirection: 'column'
                }}>
                <Typography variant={'h5'} sx={{color: 'black', fontWeight: 600}}>
                    Revision Date: March 30th, 2022.
                </Typography>
                <br/>

                <Typography variant={'h6'} sx={{color: 'black'}}>
                    LB3 Development LLC (“Waivez”, “we,” “us,” “our”) is dedicated to protecting your privacy and
                    the privacy of your customers. This policy explains what data we collect, why we collect it, and
                    what we do with it. Please read the following to learn more about our Privacy Policy.
                </Typography>
                <br/>

                <Typography variant={'h4'} color={'primary.main'}>
                    Collection and Use of Personal Information
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    Personal information is data that can be used to uniquely identify or contact a single person.
                    You may be asked to provide your personal information anytime you are in contact with Waivez or
                    a Waivez affiliated company. Waivez and its affiliates may share this personal
                    information with each other and use it consistent with this Privacy Policy. They may also combine it
                    with other information to provide and improve our products, services, content, and advertising.
                </Typography>
                <br/>
                <Typography variant={'h5'} color={'primary.main'}>
                    What Personal Information We Collect
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    <ol>
                        <li>
                            When you create a Waivez Member Account, purchase a product, download a software
                            update, or utilize Waivez services, we may collect a variety of information, including
                            your name, mailing address, phone number, email address, contact preferences, and credit
                            card information.
                        </li>
                        <li>
                            When you register for and/or participate on Waivez forums, Waivez may collect the
                            information you provide about those people such as name, mailing address, email address, and
                            phone number.
                        </li>
                        <li>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            When you use Waivez's product, we collect information about the waivers that you store
                            in the WaivezDB, such as the name of the person signing the waiver and the date that the
                            waiver is signed.
                        </li>
                    </ol>
                </Typography>
                <Typography variant={'h5'} color={'primary.main'}>
                    How We Use Your Personal Information
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    <ol>
                        <li>
                            The personal information we collect allows us to keep you posted on Waivez’s latest
                            product announcements, software updates, and upcoming events. It also helps us to improve
                            our services, content, and advertising. If you don’t want to be on our mailing list, you can
                            opt out at anytime by updating your preferences.
                        </li>
                        <li>
                            We also use personal information to help us develop, deliver, and improve our products,
                            services, content, and advertising.
                        </li>
                        <li>
                            From time to time, we may use your personal information to send important notices, such as
                            communications about purchases and changes to our terms, conditions, and policies. Because
                            this information is important to your interaction with Waivez, you may not opt out of
                            receiving these communications.
                        </li>
                        <li>
                            We may also use personal information for internal purposes such as auditing, data analysis,
                            and research to improve Waivez’s products, services, and customer communications.
                        </li>
                    </ol>
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Collection and Use of Non-Personal Information
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    We also collect non-personal information − data in a form that does not permit direct association
                    with any specific individual. We may collect, use, transfer, and disclose non-personal information
                    for any purpose. The following are some examples of non-personal information that we collect and how
                    we may use it:
                    <br/>
                    <ol>
                        <li>
                            We may collect information such as occupation, language, zip code, area code, unique device
                            identifier, location, and the time zone where a Waivez product is used so that we can
                            better understand customer behavior and improve our products, services, and advertising.
                        </li>
                        <li>
                            We also may collect information regarding customer activities on our website, and from our
                            other products and services. This information is aggregated and used to help us provide more
                            useful information to our customers and to understand which parts of our website, products,
                            and services are of the most interest. Aggregated data is considered non-personal
                            information for the purposes of this Privacy Policy.
                        </li>
                    </ol>
                    If we do combine non-personal information with personal information, then the combined information
                    will be treated as personal information for as long as it remains combined.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Cookies and Other Technologies
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    Waivez’s website, online services, interactive applications, email messages, and advertisements
                    may use “cookies” and other technologies such as pixel tags and web beacons. These technologies help
                    us better understand user behavior, tell us which parts of our website people have visited, and
                    facilitate and measure the effectiveness of advertisements and web searches. We treat information
                    collected by cookies and other technologies as non-personal information. However, to the extent that
                    Internet Protocol (IP) addresses or similar identifiers are considered personal information by local
                    law, we also treat these identifiers as personal information. Similarly, to the extent that
                    non-personal information is combined with personal information, we treat the combined information as
                    personal information for the purposes of this Privacy Policy.
                    <br/>
                    <br/>
                    Waivez and its partners use cookies and other technologies in mobile advertising services to
                    control the number of times you see a given ad, to deliver ads that relate to your interests, and to
                    measure the effectiveness of ad campaigns.
                    <br/>
                    <br/>
                    Waivez and our partners also use cookies and other technologies to remember personal
                    information when you use our website, online services, and applications. Our goal in these cases is
                    to make your experience with Waivez more convenient and personal. Knowing someone using your
                    computer or device has used a particular service helps us make any advertising and email
                    communications more relevant to your interests. And knowing your contact information and information
                    about your computer or device helps us register your products, personalize your operating system,
                    set up your Waivez service, and provide you with better customer service.
                    <br/>
                    <br/>
                    As is true of most websites, we gather some information automatically and store it in log files.
                    This information includes Internet Protocol (IP) addresses, browser type and language, Internet
                    service provider (ISP), referring and exit pages, operating system, date/time stamp, and clickstream
                    data.
                    <br/>
                    <br/>
                    We use this information to understand and analyze trends, to administer the site, to learn about
                    user behavior on the site, and to gather demographic information about our user base as a whole.
                    Waivez may use this information in our marketing and advertising services.
                    <br/>
                    <br/>
                    In some of our email messages, we may use a “click-through URL” linked to content on the Waivez
                    website. When customers click one of these URLs, they pass through a separate web server before
                    arriving at the destination page on our website. We track this click-through data to help us
                    determine interest in particular topics and measure the effectiveness of our customer
                    communications. If you prefer not to be tracked in this way, then you should not click text or
                    graphic links in the email messages.
                    <br/>
                    <br/>
                    Pixel tags enable us to send email messages in a format customers can read, and they tell us whether
                    mail has been opened. We may use this information to reduce or eliminate messages sent to customers.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Disclosure to Third Parties
                </Typography>
                <br/>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    At times Waivez may make certain personal information available to strategic partners that work
                    with Waivez to provide products and services, or that help Waivez market to customers.
                    Personal information will only be shared by Waivez to provide or improve our products, services
                    and advertising; it will not be shared with third parties for their marketing purposes.
                </Typography>
                <br/>
                <Typography variant={'h5'} color={'primary.main'}>
                    Service Providers
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    Waivez may share personal information with companies who provide services such as information
                    processing, delivering products to you, managing and enhancing customer data, providing customer
                    service, assessing your interest in our products and services, and conducting customer research or
                    satisfaction surveys. These companies are obligated to protect your information and may be located
                    wherever Waivez operates.
                </Typography>
                <br/>
                <Typography variant={'h5'} color={'primary.main'}>
                    Others
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    It may be necessary − by law, legal process, litigation, and/or requests from public and
                    governmental authorities within or outside your country of residence − for Smartwaiver to disclose
                    your personal information. We may also disclose information about you if we determine that for
                    purposes of national security, law enforcement, or other issues of public importance, disclosure is
                    necessary or appropriate.
                    <br/>
                    <br/>
                    We may also disclose information about you if we determine that disclosure is reasonably necessary
                    to enforce our terms and conditions or protect our operations or users. Additionally, in the event
                    of a reorganization, merger, or sale we may transfer any and all personal information we collect to
                    the relevant third party.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Protection of Personal Information
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    Waivez takes precautions — including administrative, technical, and physical measures — to
                    safeguard your personal information against loss, theft, and misuse, as well as against unauthorized
                    access, disclosure, alteration, and destruction.
                    <br/>
                    <br/>
                    Waivez online services use Secure Sockets Layer (SSL) encryption on all web pages where
                    personal information is collected. You must use an SSL-enabled browser such as Chrome, Firefox,
                    Internet Explorer or Safari. Doing so protects the confidentiality of your personal information
                    while it’s transmitted over the Internet.
                    <br/>
                    <br/>
                    When you use some Waivez products, services, or applications, or post on a Waivez forum or
                    chat room, the personal information you share is visible to other users and can be read, collected,
                    or used by them. You are responsible for the personal information you choose to submit in these
                    instances. For example, if you list your name and email address in a forum posting, that information
                    is public. Please take care when using these features.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Your Choices and Opt-Outs
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    Before we use your personal information for a purpose that is materially different than the purpose
                    we collected it for or that you later authorized, we will provide you with the opportunity to opt
                    out. An individual may opt-out of such uses of their personal data by contacting us at the address
                    given below. We will not use sensitive personal information for a purpose other than the purpose for
                    which it was originally collected or subsequently authorized by the individual unless we have
                    received the individual’s affirmative and explicit consent (opt-in).
                    <br/>
                    <br/>
                    Opt out requests can be made by either using the unsubscribe link at the bottom of emails you have
                    received from us or can be made by emailing us at <a href={''}>support@waivez.com</a>.
                    <br/>
                    <br/>
                    Please note that some communications (such as service messages, account notifications, billing
                    information) are considered transactional and necessary for account management and you cannot opt
                    out of these messages unless you request to deactivate your Waivez account.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Integrity and Retention of Personal Information
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    Waivez makes it easy for you to keep your personal information accurate, complete, and up to
                    date. We will retain your personal information for the period necessary to fulfill the purposes
                    outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Access to Personal Information
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    You can help ensure that your contact information and preferences are accurate, complete, and up to
                    date by logging in to your account at <a href={''}>https://www.waivez.com</a>. For other personal
                    information,
                    we make good faith efforts to provide you with access so you can request that we correct the data if
                    it is inaccurate or delete the data if Waivez is not required to retain it by law or for
                    legitimate business purposes. We may decline to process requests that are unreasonably repetitive,
                    require disproportionate technical effort, jeopardize the privacy of others, are extremely
                    impractical, or for which access is not otherwise required by local law. Access, correction, or
                    deletion requests can be made by emailing <a href={''}>privacy@waivez.com</a>.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Location-Based Services
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    To provide location-based services on Waivez products, Waivez and our partners and
                    licensees may collect, use, and share precise location data, including the real-time geographic
                    location of your Waivez computer or device. This location data is collected anonymously in a
                    form that does not personally identify you and is used by Waivez and our partners and licensees
                    to provide and improve location-based products and services. For example, we may share geographic
                    location with application providers when you opt in to their location services, if applicable.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Third-Party Sites and Services
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    Waivez websites, products, applications, and services may contain links to third-party
                    websites, products, and services. Our products and services may also use or offer products or
                    services from third parties. Information collected by third parties, which may include such things
                    as location data or contact details, is governed by their privacy practices. We encourage you to
                    learn about the privacy practices of those third parties.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Compliance
                </Typography>
                <br/>
                <Typography variant={'h5'} color={'primary.main'}>
                    We Operate in the United States
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black'}}>
                    Our servers and offices are located in the United States, so your information may be transferred to,
                    stored, or processed in the United States. While the data protection, privacy, and other laws of the
                    United States might not be as comprehensive as those in your country, we take many steps to protect
                    your privacy. By using Waivez, you understand and consent to the collection, storage,
                    processing, and transfer of your information to our facilities in the United States and those third
                    parties with whom we share it as described in this policy.
                </Typography>
                <br/>
                <Typography variant={'h4'} color={'primary.main'}>
                    Privacy Questions
                </Typography>
                <Typography variant={'h6'} sx={{color: 'black', mb: 10}}>
                    If you have any questions or concerns about Waivez’s Privacy Policy or data processing, please
                    contact us at: <a href={''}>privacy@waivez.com</a>.
                    <br/>
                    <br/>
                    Waivez may update its Privacy Policy from time to time. When we change the policy in a material
                    way, a notice will be posted on our website along with the updated Privacy Policy.
                </Typography>
            </Container>
        </Box>
    );
};

export default PrivacyPolicy;
