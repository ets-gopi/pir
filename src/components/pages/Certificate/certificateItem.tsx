import React from 'react';
import certificatesStyles from './certificate.module.css';
import { certificateIcon } from '../../../assets';

const CertificateItem = ({ title, link }: { title: string; link: string }) => {
    return (
        <React.Fragment>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className={certificatesStyles.icon}>
                    <img src={certificateIcon} alt="Certificate Icon" width="50" height="50" />
                    <div className={certificatesStyles.corner}></div>
                </div>

                <div className={certificatesStyles.content}>
                    <div>
                        <p>{title}</p>
                    </div>
                    <div>
                        <span>Verified</span>
                        <svg width="90" height="60" style={{ textAlign: 'end' }}>
                            <rect width="60" height="30" x="25" y="25" fill="#8892b0" />

                            <path d="M15 25 L25 25 L25 40 Z" fill="#8892b0" />

                            <path d="M15 55 L25 55 L25 40 Z" fill="#8892b0" />
                            <text x="50" y="43" fontSize="15" fill="#ccd6f6" textAnchor="middle" dominantBaseline="middle">
                                Skill
                            </text>
                        </svg>
                    </div>
                </div>
            </a>
        </React.Fragment>
    );
};

export default CertificateItem;
