"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function FooterButton({ type }: { type: "github" | "twitter" | "linkedin" }) {
  const getComponent = () => {
    switch (type) {
      case "github":
        return <Github />
      case "twitter":
        return <Twitter />
      case "linkedin":
        return <Linkedin />
    }
  }

  const openInNewTab = () => {
    let url = ""
    switch (type) {
      case "github":
        url = "https://github.com/ngworks1909?tab=repositories"
        break
      case "linkedin":
        url = "https://www.linkedin.com/in/k-nithin-kumar-reddy-847284205/"
        break
      case "twitter":
        url = "https://x.com/NithinKumar1909"
        break
    }
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Button variant="ghost" size="icon" onClick={openInNewTab}>
      {getComponent()}
      <span className="sr-only">{type}</span>
    </Button>
  )
}
