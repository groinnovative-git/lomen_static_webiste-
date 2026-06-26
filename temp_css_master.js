const fs = require('fs');
let content = fs.readFileSync('src/assets/css/custom.css', 'utf8');

// Step 1: Find the end of the .homeTrustedLabel class block
const trustedLabelStr = '.homeTrustedLabel {\n    font-size: 11px;\n    letter-spacing: 0.5px;\n  }';
const trustedLabelIdx = content.lastIndexOf(trustedLabelStr);
if (trustedLabelIdx === -1) {
    console.log('Failed to find trustedLabelStr');
    process.exit(1);
}

// Slice to exactly include the closing bracket of the media query
const firstHalf = content.slice(0, trustedLabelIdx + trustedLabelStr.length) + '\n}\n\n';

// Step 2: The perfect Google Review and Instagram padding CSS
const reviewCSS = \/* ------------------------------------------------------------------------------
   HOMEPAGE — Customer Review Section
   ------------------------------------------------------------------------------ */

.googleReviewSection {
  padding: 40px 20px 20px;
  background-color: #faf9f7;
  overflow: hidden;
}

.googleReviewSectionInner {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.googleReviewHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  margin-bottom: 30px;
}

.googleReviewHeaderLeft {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.googleReviewTitle {
  font-size: 20px;
  font-weight: 600;
  color: #202124;
}

.googleReviewRatingMeta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.googleReviewScore {
  font-size: 24px;
  font-weight: 700;
  color: #202124;
}

.googleReviewHeaderStars {
  display: flex;
  gap: 2px;
}

.googleReviewCount {
  font-size: 14px;
  color: #5f6368;
}

.googleReviewBtn {
  background-color: #1a73e8;
  color: white;
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.googleReviewBtn:hover {
  background-color: #1557b0;
  color: white;
}

/* Marquee */
.googleReviewMarquee {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  padding: 20px 0;
}

.googleReviewTrack {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: googleReviewScroll 40s linear infinite;
}

.googleReviewTrack:hover {
  animation-play-state: paused;
}

@keyframes googleReviewScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 10px)); }
}

/* Card */
.googleReviewCard {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  width: 350px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 1px solid #f1f3f4;
  flex-shrink: 0;
}

.googleReviewTop {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.googleReviewAvatarWrapper {
  position: relative;
}

.googleReviewAvatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #0e0906;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
}

.googleReviewBadge {
  position: absolute;
  bottom: -4px;
  right: -4px;
  background-color: white;
  border-radius: 50%;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.googleReviewMeta {
  flex: 1;
}

.googleReviewNameRow {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

.googleReviewName {
  font-size: 14px;
  font-weight: 600;
  color: #202124;
}

.googleReviewVerified {
  flex-shrink: 0;
}

.googleReviewTime {
  font-size: 12px;
  color: #5f6368;
}

.googleReviewStars {
  display: flex;
  gap: 2px;
  margin-bottom: 12px;
}

.googleReviewText {
  font-size: 14px;
  line-height: 1.5;
  color: #3c4043;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.googleReviewReadMore {
  background: none;
  border: none;
  color: #1a73e8;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
}

.googleReviewReadMore:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .googleReviewHeader {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
  }
}
\n\n\;

// Step 3: Find the Instagram handle class
const handleStr = '.homeInstagramHandle {';
const handleIdx = content.indexOf(handleStr);
if (handleIdx === -1) {
    console.log('Failed to find handleStr');
    process.exit(1);
}

// Slice to include the Instagram section header with tight padding
const instaCSS = \/* ------------------------------------------------------------------------------
   HOMEPAGE — Instagram Section
   ------------------------------------------------------------------------------ */

.homeInstagramSection {
  padding: 20px 50px 80px;
  background-color: #faf9f7;
}

.homeInstagramSectionInner {
  max-width: 1400px;
  margin: 0 auto;
}

\;

const lastHalf = content.slice(handleIdx);

// Write it out
fs.writeFileSync('src/assets/css/custom.css', firstHalf + reviewCSS + instaCSS + lastHalf);
console.log('Master script executed successfully');
