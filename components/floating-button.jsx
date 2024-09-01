import React from 'react'
import PortfolioPdf from '../app/resurces/CSharpCodingStandards.pdf'

import { FloatButton } from 'antd'

 
export default function Projects() {
  return (
    <>
    <FloatButton.Group shape="circle" style={{ right: 30 }}>
      <a
        href={PortfolioPdf}
        download="Portfolio-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
      <FloatButton
        tooltip={<div className="font-architects-daughter  text-purple-600 mb-2">Наши проекты</div>}
        badge={{  dot: true, color: 'blue' }}
        style={{height: 45, width: 45}}
      />
      </a> 
    </FloatButton.Group>
  </>
 )
}
