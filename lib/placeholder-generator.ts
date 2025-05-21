/**
 * Utility function to generate placeholder images for projects
 * This creates canvas-based placeholders that look like actual project screenshots
 */
export function generateProjectPlaceholder(
  title: string,
  width = 600,
  height = 400,
  type: "website" | "mobile" | "dashboard" = "website",
): string {
  // This would normally generate a canvas and return a data URL
  // For now, we'll return a path to our placeholder images

  // In a real implementation, we would create canvas-based placeholders here
  // and return them as data URLs

  // For simplicity in this example, we'll just return paths to our placeholder images
  if (type === "mobile") {
    return `/images/placeholders/mobile-app.png`
  } else if (type === "dashboard") {
    return `/images/placeholders/dashboard.png`
  } else {
    return `/images/placeholders/website.png`
  }
}

/**
 * Utility function to generate placeholder images for certifications
 */
export function generateCertificationPlaceholder(issuer: string, width = 200, height = 200): string {
  // For simplicity, return paths to our placeholder images
  if (issuer.toLowerCase().includes("google")) {
    return `/images/placeholders/google-cert.png`
  } else if (issuer.toLowerCase().includes("freecodecamp")) {
    return `/images/placeholders/freecodecamp-cert.png`
  } else {
    return `/images/placeholders/generic-cert.png`
  }
}
