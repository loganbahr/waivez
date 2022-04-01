import React from 'react';
import Box from "@mui/material/Box";
import {Container, Typography} from "@mui/material";
import Head from "next/head";
import TitleText from "../../components/Text/TitleText";

const TermsOfService = () => {
    return (
        <Box
            sx={{
                border: '2px solid red',
                height: '2000vh',
            }}>
            <Container
                maxWidth={'lg'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '2px solid blue',
                    my: 10,
                }}>
                <Head>
                    <title>
                        Terms Of Service
                    </title>
                    <meta/>
                </Head>
                <Typography variant={'h1'}>
                    Terms of Service
                </Typography>
            </Container>

            <Container
                disableGutters={true}
                sx={{
                    px: 2,
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                <Typography variant={'h4'} color={'primary.main'}>
                    LB3 Development LLC TERMS OF SERVICE
                </Typography>

                <Typography variant={'h6'} sx={{color: 'black'}}>
                    <ol>
                        <li>
                            Your Acceptance of Terms
                        </li>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Welcome to Smartwaiver Digital Waivers
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            The following Terms of Service (“TOS”) are between you and LB3 Development LLC and
                            constitute
                            a legal agreement that governs your use of the Waivez product, software, services and
                            website, as more fully described at Waivez (collectively referred to as the “Service”).
                            You must agree to these TOS before you can use the Service. You can agree to these TOS by:
                            (a) actually using the Service, or (b) clicking a box that indicates you agree to the
                            Service, where such a box is made available to you. If you do not agree to any of the
                            following terms, you may not use the Service. You should print or otherwise save a copy of
                            these TOS for your records.
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Legal Authority
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            To use and/or register for the Service you must be: (a) of legal age to form a binding
                            contract with LB3 Development LLC, (b) having the mental and legal capacity to form a
                            binding
                            contract and (c) cannot be a person barred from receiving the Service under the laws of the
                            United States or other applicable jurisdiction, including the country in which you reside or
                            from where you use the Service. By accepting these TOS you represent that you understand and
                            agree to the foregoing
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Updates
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            LB3 Development LLC may update or change these TOS from time to time and recommends that you
                            review the TOS on a regular basis. You can review the most current version of the TOS at any
                            time. If LB3 Development LLC makes a change to the TOS, it will post the revised TOS on our
                            website at the link as herein noted. You understand and agree that your continued use of the
                            Service after the TOS has changed constitutes your acceptance of the TOS as revised. Without
                            limiting the foregoing, if LB3 Development LLC makes a change to the TOS that materially
                            impacts your use of the Service, LB3 Development LLC may post notice of any such change on
                            our website and/or email you notice of any such change to your Waivez account.
                        </Typography>
                        <br/>
                        <li>
                            Description of the Service
                        </li>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            System Requirements
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            Use of the Service requires one or more compatible devices, certain software and internet
                            access with compatible ISP (broadband required for web applications); separate fees may
                            apply. LB3 Development LLC does not sell any hardware or fixtures. Your use of the Service
                            may be affected by certain combinations of hardware, software and/or internet access. High
                            speed internet access is strongly recommended.
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Changing the Service
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            LB3 Development LLC reserves the right to modify or stop the Service (or any part thereof),
                            either temporarily or permanently, at any time or from time to time, with or without prior
                            notice to you. Without limiting the foregoing, LB3 Development LLC may post on our website
                            and/or send email to your Waivez account, notice of such changes to the Service. It is
                            your responsibility to review our website and/or check your email address provided to LB3
                            Development LLC for any such notices. You agree that LB3 Development LLC shall not be liable
                            to you or any third party for any modification or cessation of the Service.
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Limitations on Use
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            You agree to use the Service only for purposes as permitted by these TOS and any applicable
                            law, regulation, or generally accepted practice in the applicable jurisdiction. Your
                            Waivez account is allocated certain numbers of digital waivers, and certain levels of
                            storage capacity and email as described in the Waivez feature pages. Any unused digital
                            waivers allocated in your selected monthly plan do not carry over to the following month. To
                            view your current usage and/or storage allocations, log in to your Waivez account page.
                            LB3 Development LLC reserves the right to modify these limitations on use at any time.
                            <br/>
                            <br/>
                            Completed waivers will be stored for paying customers at any level of service for as long as
                            their account remains current. If you terminate your paid account, your waivers will be
                            automatically deleted thirty days after your account is terminated.
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Availability of the Service
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            The Service, or any feature or part thereof, may not be available in all languages or in all
                            countries and LB3 Development LLC makes no representation that the Service, or any feature
                            or
                            part thereof, is appropriate or available for use in any particular location. To the extent
                            you choose to access and use the Service, you do so at your own initiative and are
                            responsible for compliance with any applicable laws, including, but not limited to, any
                            applicable local laws.
                        </Typography>
                        <br/>
                        <li>
                            Your Use of the Service
                        </li>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Member Account
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            When you accept these TOS and complete the Waivez sign up process, you become the
                            Waivez “Member Account” holder. You are required to select a unique name upon sign up
                            that will be used for your account (your “Member ID”). You are responsible for all activity
                            that takes place on your Member Account.

                            Upon creating your Member ID you will be required to select a password. Please choose a
                            strong password and do not reveal your password to others. You agree that you are
                            responsible for keeping your password confidential and secure, and further understand that
                            you are solely responsible and liable for any activities that occur under your Member ID. If
                            you suspect or become aware of any unauthorized use of your account please contact
                            Waivez Customer Support. You further acknowledge and agree that the Service is designed
                            and intended only for the use of the Member opening an account and you should not share your
                            account and/or password details with another individual or entity. You allowing anyone other
                            than the subscriber to access your Member Account (other than your authorized employees or
                            LB3 Development LLC) is a violation of these TOS and grounds for immediate termination or
                            suspension of your account without refund.
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Sign Up Obligations
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            You agree that all information you provide to LB3 Development LLC during the sign up process
                            (“Sign Up Data”) will be true, accurate, complete and current information, and that you
                            shall maintain and update the Sign Up Data as needed throughout your term to keep it
                            accurate and current. Failure to provide accurate, current and complete Sign Up Data may
                            result in the suspension and/or termination of your account.
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            Additional Obligations or Terms of Use
                        </Typography>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            Particular components or features of the Service, provided by LB3 Development LLC and/or its
                            licensors, may be subject to separate software or other license agreements or terms of use.
                            You must read, accept, and agree to be bound by any such separate agreement as a condition
                            of using these particular components or features of the Service.
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            No Conveyance
                        </Typography>

                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            Nothing in these TOS shall be construed to convey to you any interest, title, or license in
                            a Member ID, email address, domain name, intellectual property of LB3 Development LLC or
                            similar resource used by you in connection with the Service.
                        </Typography>
                        <br/>
                        <Typography variant={'h5'} color={'primary.main'}>
                            No Right of Survivorship
                        </Typography>

                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            You agree that any rights to your Member ID or Content within your account terminate upon
                            your death, or the dissolution, sale or bankruptcy of the Member if an entity. Upon receipt
                            of a copy of a death certificate your account may be terminated and all Content within your
                            account deleted after thirty days of such notice or returned to you. Contact support at for
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            further assistance. In the event of a sale or transfer of the Subscriber, the Subscriber's
                            Content will remain stored in the WaivezDB so long as the transferee keeps the existing
                            Membership Account current.
                            <br/>
                            <br/>
                            No Resale of Service
                            <br/>
                            <br/>
                            You agree that you will not reproduce, copy, duplicate, sell, resell, rent or trade the
                            Service (or any part thereof) for any purpose.
                            <br/>
                            <br/>
                            Use of Location-based Services
                            <br/>
                            <br/>
                            LB3 Development LLC and its partners and licensors may provide certain features or services
                            through the Service that rely upon device-based location information. To provide such
                            features or services, where available, LB3 Development LLC and its partners and licensors
                            may
                            collect, use, transmit, process and maintain your location data, including the real-time
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            geographic location of your device, and you hereby agree and consent to LB3 Development
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            LLC's and its partners' and licensors' collection, use, transmission, processing and
                            maintenance
                            of such location data to provide such services. In addition, by enabling and/or using any
                            location-based services or features within the Service, you agree and consent to LB3
                            Development LLC collecting, using, processing and maintaining information related to your
                            account, and any devices registered thereunder, for purposes of providing such
                            location-based service or feature to you. Such information may include, but is not limited
                            to, your Member ID, device ID and name, device type and real-time geographic location of
                            your device at time of your request. You may withdraw this consent at any time by not using
                            the location-based features or by turning off the Location Services settings (as applicable)
                            on your device. When using third party services that use or provide location data as part of
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            the Service, you are subject to and should review such third party's terms and privacy
                            policy on use of location data by such third party services. Any location data provided by
                            the Service is not intended to be relied upon in situations where precise location
                            information is needed or where erroneous, inaccurate, time-delayed or incomplete location
                            data may lead to death, personal injury, property or environmental damage. Neither LB3
                            Development LLC nor any of its content providers guarantees the availability, accuracy,
                            completeness, reliability, or timeliness of location data or any other data displayed by the
                            Service.
                        </Typography>
                        <br/>
                        <li>
                            LB3 Development LLC Privacy Policy
                        </li>
                        <br/>
                        <Typography variant={'h6'} sx={{color: 'black'}}>
                            You understand that by using the Service, you consent and agree to the collection and use of
                            certain information about you and your use of the Service in accordance with LB3 Development
                            LLC’s Privacy Policy. You further consent and agree that LB3 Development LLC may collect,
                            use, transmit, process and maintain information related to your account, and any devices
                            registered thereunder, for purposes of providing the Service, and any features therein, to
                            you. Information collected by LB3 Development LLC when you use the Service may also include
                            technical or diagnostic information related to your use that may be used by LB3 Development
                            LLC to maintain, improve and enhance the Service. For more information please read our full
                            privacy policy at Waivez. You further understand and agree that this information may be
                            transferred to the United States and/or other countries for storage, processing and use by
                            LB3 Development LLC and/or its affiliates.
                        </Typography>

                    </ol>
                </Typography>


            </Container>
        </Box>
    );
};

export default TermsOfService;
