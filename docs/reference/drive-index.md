# Project Drive Index

The project's working files live in Google Drive, not in this repository. Binaries,
third-party PDFs, and reference images stay there; this file is the index.

**Folder:** [UAE Character Project](https://drive.google.com/drive/folders/1fuf5EL2fl3Z_0pIhtapwFMalTcG7BDKf)
**Folder ID:** `1fuf5EL2fl3Z_0pIhtapwFMalTcG7BDKf`
**Owner:** contact@vinicavalcanti.art
**Indexed:** 1 September 2026, 28 files

## How a Claude session reads it

The Google Drive connector must be enabled for the session. Then:

```
search_files       query: parentId = '1fuf5EL2fl3Z_0pIhtapwFMalTcG7BDKf'
read_file_content  fileId: <id>     text representation
download_file_content fileId: <id>  base64 bytes
```

Open any file directly at `https://drive.google.com/file/d/<id>/view`.

Two connector behaviours to expect. `read_file_content` returns empty for every PDF
in this folder, so it is not a usable path for the sources. `download_file_content`
on a PDF may return a ZIP of per-page JPEGs rather than the PDF itself, in which case
read the pages as images.

---

## 1. Project documents

| File | Drive ID | Notes |
|---|---|---|
| UAE_Character_Art_Direction_Manual.pdf | `1SikVGqreft7j40A2pvbJOLNmyRfXT3UK` | The Manual. 4.1 MB. No extractable text layer. |
| Designing_Emirati_Characters_...docx | `1JdNCNaFiX2fenie-xHaHy9w7tX2YNosc` | Article. Canonical copy in `docs/article/`. |
| Endstar_Contextual_Report.docx | `1PGT97XKN_2QBSo0oAAwNBjCil8tXt3Rr` | Canonical copy in `docs/article/`. |
| UAE_Character_Reference_Workflow.md | `1F4TmcXKGU4WsQ7B4FknjqgwOU5SlaOVV` | Canonical copy in `docs/process/`. |
| UAE_Cultural_Research_Brief.md | `1vC3sqaqhsm4KIn_2hJw-iYczf0wZg9Pm` | Canonical copy in `docs/reference/`. |

## 2. Sources cited in the article

| Reference | File | Drive ID |
|---|---|---|
| Alshehhi et al. (2025), *PLOS ONE* 20(2) e0299660 | journal_pone_0299660.pdf | `1cELTWpmnTHyO_ewvu0hvWzLEkWzvrzih` |
| Alshehhi et al. (2025), duplicate | UAEarticle2.pdf | `1pqLJT4OntwnxBQpJyt9tJ88MxvfI_QIP` |
| Khalaf (2005), national dress | National_dress_and_the_construction_of_E_OCR.pdf | `1I84CbfKH4l9ryYlTjKE4HS5io7trka2k` |
| Goto (2016), representing the Emirati nation through Burqu' | 2_04Goto1.pdf | `1OGrpnXf6OF_bG-L9d1IOqLaXt5rA3fgx` |
| Ercegovac et al. (2025), Freej | kkonline202516166.pdf | `1Ujh2iqegoLPsohK2AN_T3HL7M4CdSNCg` |
| Tariq & Willard (2022), UAE animation industry | UAEAnimationIndustry.pdf | `1lvRfjZn4FBNdMBO_pp5zr_4tAnH9HgBB` |
| Alghamdi (2024), hunting stereotypes | HuntingStereotypes.pdf | `1bdTtU7nxouzaT75dNFdBKCAfkgTGW_pu` |
| Hall, *Da diáspora* (see gap H below) | da-diaspora-stuart-hall_compressed.pdf | `1M4iMVbbQx4anBp5hIi-zWCxrIINz-GlW` |

`UAEarticle2.pdf` and `journal_pone_0299660.pdf` are both 2,265,774 bytes. Same file
under two names.

## 3. Sources in the evidence base but not in the article's reference list

| Work | File | Drive ID |
|---|---|---|
| Clarence, A. E., & Rosli, H. (2025). Cross-cultural narratives in animation. *IJRISS, IX*(IIIS), 6056. DOI 10.47772/IJRISS.2025.903SEDU0437 | UAEarticle1.pdf | `1PY5NTn7Q4Klo-m9t6GLtuwRr6jB4ajH6` |
| Sheen, M., Aman Key Yekani, H., & Jordan, T. R. (2018). Investigating the effect of wearing the hijab. *PLOS ONE, 13*(10), e0199537 | UAEarticle3.pdf | `1z_k0DYaCYa8zjLXUUc180js_H9sl2zu2` |
| Cartoons and cultures: history of the United Arab Emirates animation | Cartoons_and_Cultures_History_of_the_Uni.pdf | `1xM3SgNi5p36nAzzsS7XlAuuxY_n3vUsV` |
| Martino, L. M. S. *Métodos de pesquisa em comunicação* | 905083266Martino...compressedOCR.pdf | `1VICNt1kd3pW_0vRTFzhz143mxs9FFO0f` |

Both filenames were opaque. `UAEarticle1` and `UAEarticle3` were identified by reading
their first pages as images.

## 4. Format templates and process

| File | Drive ID |
|---|---|
| APA_7th_Format_and_Citation_Student_Guide_ASC.pdf | `1ZDr8ZB8MacrbU9CKU0hD5MnER4F399py` |
| ModeloJournalAPAExample.pdf | `17kdumFjz0-6yfOTTwYpKL20hGUEoBzJr` |
| finalize_checklist_02.pdf | `1h4qws5px0VQSR_LHUNheKTaYobZ7rz14` |

## 5. Reference images

All eight carry a `.png` extension but are JPEG data.

| File | Drive ID | Content |
|---|---|---|
| UAEWomans.png | `1X3DKSRRjxrXkUQbmdaBaIFJKfHXJ1yvl` | Four Emirati women, gold burqas, Abuteela in red / green / white / orange, black shayla, gold jewelry, striped geometric textile backdrop. See `docs/article/figures.md`. |
| imagem_20260526_234036116.png | `14N2F_B6r-szq394JBytLsmhtwtpKwWY-` | Not yet reviewed |
| imagem_20260526_174110039.png | `1yzk6JoEiYlLo5zVxCHa3NUvyOqcCQAhN` | Not yet reviewed |
| imagem_20260526_174118913.png | `1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5` | Not yet reviewed |
| imagem_20260526_174128009.png | `1Zq29io2O72suHn-RtMKKmgqspj-cHdp8` | Not yet reviewed |
| imagem_20260526_174137432.png | `13YZaFJcmxALfQp4l7OgqCR78D_l4QbH1` | Not yet reviewed |
| imagem_20260526_174146371.png | `148xFg45hKHBdewWB3Jb6mXgDoDqNAKXi` | Not yet reviewed |
| imagem_20260526_174155428.png | `1VewIzZF3uM6um43G83GngEaQXzLobFr5` | Not yet reviewed |

---

## Gaps against the article's reference list

Cited in the manuscript, absent from this folder. Stage E2 needs each verified against
the source, not from memory.

| Gap | Reference | Weight |
|---|---|---|
| A | Wang, Y., Thomas, J., Weissgerber, S. C., Kazemini, S., Ul-Haq, I., & Quadflieg, S. (2015). *Perception, 44*(3), 328–336 | One of the three evidential pillars. The nasal-region finding, the *sallat al saif* argument, and Criterion 1 all rest on it. Highest priority. |
| B | Šisler, V. (2008). *European Journal of Cultural Studies, 11*(2) | Carries the Results section on Arab representation |
| C | Al-Rawi, A. (2024). *Games and Culture* | Four-theme longitudinal argument |
| D | Alfaraj, B. (2019). Arab gamers: An identity inclusivity study | The 81-interview figure appears three times in the manuscript |
| E | Lataifeh, M., et al. (2024). *The Journal of Supercomputing* | Mental fixation claim in the Discussion |
| F | Said, E. W. (1978). *Orientalism* | Theoretical Framework |
| G | Creswell & Creswell (2018); Merriam & Tisdell (2016) | Method section |
| H | Hall, S. (1980). Encoding/decoding. In *Culture, media, language*, 128–138 | The folder holds *Da diáspora*, a different Brazilian collection. Page numbers in the reference list point to the Hutchinson volume, so the cited edition is not the one on file. |

## Open question on attribution

The Theoretical Framework attributes the *Moana* analysis and the
preservation-amplification principle to Ercegovac et al. (2025), the Freej paper. The
Cultural Research Brief attributes the *Moana* case study to Clarence and Rosli (2025),
the IJRISS paper, which the article does not cite at all.

Either Ercegovac et al. genuinely analyse *Moana* and the attribution holds, or the
principle came from the IJRISS paper and the citation is wrong in every place it
appears. This has to be settled by reading Ercegovac et al. before E6, since the
principle is one of the article's three theoretical lenses.
