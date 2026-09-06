# Waqas Ahmad — Academic / PhD Portfolio

This is a static website designed for GitHub Pages.

## Design logic

The homepage separates the work into:

### Featured Work
1. MSc crop-modeling / satellite-data-assimilation research
2. Kisan360 applied precision-agriculture project

### Selected Geospatial Work
3. Köppen-Geiger climate classification
4. D.G. Khan flood mapping
5. Faisalabad LULC classification

This intentionally avoids presenting all five items as equivalent research studies.

## Files

- `index.html` — homepage
- `styles.css` — shared design
- `script.js` — mobile navigation + image fallbacks
- `projects/` — five individual project pages
- `assets/images/` — project / profile images
- `assets/Waqas_Ahmad_CV.pdf` — current CV

## Images already included from your files

The current build includes:
- profile photo
- Kisan360 pilot map / portal / mobile screenshots / field image
- Köppen-Geiger climate maps from the original analysis
- flood mapping figures from the conference document
- LULC report pages / classification outputs

## Images you should add later

These are intentionally missing. The site will show the ALT text as a placeholder until you add the file.

### Thesis
- `assets/images/thesis-hero.jpg`
- `assets/images/thesis-workflow.jpg`
- `assets/images/thesis-et-phenology.jpg`
- `assets/images/thesis-yield-results.jpg`

Recommended:
- strongest result figure as `thesis-hero.jpg`
- a clean workflow diagram
- ET / phenology time series
- observed-vs-modeled biomass or yield figure

### Field / UAV gallery
- `assets/images/field-uav-operation.jpg`
- `assets/images/field-multispectral.jpg`
- `assets/images/field-sensors.jpg`
- `assets/images/field-training.jpg`

Use real photographs of you / your project activities rather than stock images.

## Links to replace

Search the HTML files for `href="#"` and replace:
- GitHub
- LinkedIn

The email is currently set to:
`vakasahmad@gmail.com`

## CV

The included PDF is the CV you supplied for the Jülich PhD application.
Replace `assets/Waqas_Ahmad_CV.pdf` with your final general academic CV before publishing if desired.

## Research-output links

You may later add:
- Google Drive / repository links to conference abstracts
- GitHub repository for Köppen-Geiger code
- manuscript / preprint link when available
- project resources for Kisan360

## Publish on GitHub Pages

Create a repository named:

`YOUR-GITHUB-USERNAME.github.io`

Upload the CONTENTS of this folder to the repository root.

Your site will be:

`https://YOUR-GITHUB-USERNAME.github.io/`

No build system or external framework is required.


## Final homepage revisions

This build includes the final section-by-section decisions:

- Header preserved, but the MSc / research direction / location quick-fact row was removed.
- About section preserved.
- Research Interests are now a simple, lighter-weight bullet list with no numbered cards or dividers.
- Projects section follows the approved sample:
  - two wide horizontal Featured Work cards
  - three compact horizontal Selected Geospatial Work cards
- Project figures use `object-fit: contain` by default so replacing images does not crop their left/right edges.
- Remaining homepage sections and individual project-page content are preserved from the previous complete build.

If you prefer a photograph or screenshot to fill its frame and crop intentionally, add the class `photo-fit`
to its image container.


## Projects section — latest fix
The homepage Projects section has been rebuilt again to match the approved sample more closely:
- no top project-type label lines
- shorter text
- sample-like aspect ratios
- two horizontal featured cards
- three compact horizontal geospatial cards
- a dedicated cropped `kisan-card.jpg` homepage thumbnail
- scientific images remain `contain` by default to avoid unwanted cropping


## Homepage project thumbnails — final specification

The Projects section is now built specifically around dedicated square thumbnails.

Use **1200 × 1200 px** images and replace these files:

- `assets/images/home-thesis.jpg`
- `assets/images/home-kisan360.jpg`
- `assets/images/home-koppen.jpg`
- `assets/images/home-flood.jpg`
- `assets/images/home-lulc.jpg`

Recommended thumbnail composition:
- Thesis: 2×2 collage (LAI, ET, phenology, yield result)
- Kisan360: crop/field condition portal view
- Köppen-Geiger: climate map with compact legend
- Flood: strongest flood map with compact legend
- LULC: one representative map or compact 3-year collage

The homepage cards use `object-fit: cover`, so square thumbnails will fill the rounded image frames cleanly.
Keep important labels/legends at least ~60 px from image edges.


## Projects V3 — final card format

The homepage Projects section now uses **image above, text below** cards and the same
standard container width as the rest of the portfolio.

Replace these homepage thumbnails with your own **1600 × 1000 px** images:

- `assets/images/home-thesis-16x10.jpg`
- `assets/images/home-kisan360-16x10.jpg`
- `assets/images/home-koppen-16x10.jpg`
- `assets/images/home-flood-16x10.jpg`
- `assets/images/home-lulc-16x10.jpg`

The thumbnails are displayed at a fixed **16:10** ratio using `object-fit: cover`.
This gives predictable card geometry and avoids the distortion/cropping problems caused by
trying to reuse arbitrary project figures.

Recommended:
- thesis: 2×2 collage
- Kisan360: cropped portal / field-condition screenshot
- Köppen: climate map + compact legend
- flood: strongest flood map + compact legend
- LULC: one strong map or compact 3-year collage
