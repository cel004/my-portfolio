import React from 'react';

export function LineMdLinkedin(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <circle cx={4} cy={4} r={2} fill="currentColor" fillOpacity={0}>
            <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1"></animate></circle>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
                <path strokeDasharray={12} strokeDashoffset={12} d="M4 10v10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0">
                    </animate></path><path strokeDasharray={12} strokeDashoffset={12} d="M10 10v10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0">
                        </animate></path><path strokeDasharray={24} strokeDashoffset={24} d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0"></animate></path></g></svg>);
}