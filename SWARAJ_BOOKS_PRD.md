# Swaraj Books (Library Hub) — Product Requirements Document (PRD)
> *"re-library that connects India's library"*  
> **Theme:** *"Educate, Unite and Agitate"* — Dr. B.R. Ambedkar  
> **Core Principle:** *"Here we are not storing books, rather acting as the medium to provide books."*

---

## 1. Executive Summary & Problem Statement

### 1.1 The Challenge: Dead Capital in Dormant Libraries
Across India, thousands of municipal, trust, community, and school libraries sit in an **attenuated (dormant/unattended)** state. Valuable collections of textbooks, civil service preparation materials, literature, and reference volumes remain locked behind closed doors or underutilized on dusty shelves.

Concurrently, millions of students, competitive exam aspirants (UPSC, State PSC, SSC), and avid readers in the same localities struggle to gain reliable, affordable access to physical learning materials.

### 1.2 The Solution: Swaraj Books Hub
**Swaraj Books** acts as a decentralized digital bridge connecting existing dormant libraries directly to readers in need. 

* **Zero-Inventory Model:** The platform holds no central book inventory and operates no costly warehouses. It functions purely as the connective infrastructure that indexes, verifies, and mobilizes existing physical book stock.
* **Community-Rooted Circulation:** Books remain housed in local partner libraries until issued directly to verified readers.
* **Radical Accessibility:** Eliminates the barrier of purchasing expensive physical books by enabling easy, temporary circulation and long-term academic book bank access.

---

## 2. Core Platform Architecture & Flow

```
   ┌─────────────────────────────────────────────────────────────┐
   │             DORMANT / ATTENUATED LIBRARIES                  │
   │   (Public Reading Rooms, Municipal Trusts, School Shelves)  │
   │       [Library I]   [Library II]   [Library III]   [Library IV]    │
   └──────────────────────────────┬──────────────────────────────┘
                                  │ Catalog Feeds & Stock Status
                                  ▼
   ┌─────────────────────────────────────────────────────────────┐
   │                    SWARAJ BOOKS E-PLATFORM                  │
   │       "Here we are not storing books, rather acting        │
   │                 as the medium to provide books"             │
   │                                                             │
   │   • Unified Search & Aggregation                            │
   │   • Real-Time Stock Status (Green = Available, Red = Issued)│
   │   • Strict Identity Verification (Aadhaar + Live Photo)     │
   └──────────────────────────────┬──────────────────────────────┘
                                  │ Book Fulfillment & Circulation
                                  ▼
   ┌─────────────────────────────────────────────────────────────┐
   │                      NEEDY READERS                          │
   │       (School Students, Exam Aspirants, Community Readers)  │
   │         [Reader I]    [Reader II]    [Reader III]           │
   └─────────────────────────────────────────────────────────────┘
```

---

## 3. Product Features & User Experience (UX)

### 3.1 The "Early Page" (Homepage & Discovery Portal)
The landing interface welcomes visitors with the platform's social mission and provides instant access to neighborhood book inventories.

* **Brand Header:**
  * Left: Platform title and Dr. Ambedkar's guiding motto: *"Educate, Unite and Agitate"*.
  * Right: Seamless **Login / Register** entry point for readers and library administrators.
* **Universal Search Engine:** A prominent search bar enabling readers to query by title, author, subject, class, or competitive exam.
* **"Connected Our Libraries" Directory:** A live showcase of all affiliated neighborhood libraries, highlighting their collection size, address, and specialty categories.
* **Right-Hand Community Panel:**
  * **"Know About Us":** The founding story and vision for public library revitalization.
  * **FAQ Section:** Direct answers addressing pickup workflows, return expectations, and borrower guidelines.
  * **"Why We Are" (Social Manifesto):** Explaining how public book-sharing empowers communities.

```
+-----------------------------------------------------------------------------------------------+
| [ SWARAJ BOOKS ]  "Educate, Unite and Agitate"                        [ Login / Register ]    |
+-----------------------------------------------------------------------------------------------+
|                                                                                               |
|                               REVIVE INDIA'S LIBRARIES                                        |
|              Connect with physical books resting in community libraries near you               |
|                                                                                               |
|                   +-------------------------------------------------------+                   |
|                   |  🔍 Search by book title, author, subject, or ISBN... | [ Search ]         |
|                   +-------------------------------------------------------+                   |
|                                                                                               |
|  +---------------------------------------------------+  +----------------------------------+  |
|  |  CONNECTED OUR LIBRARIES (Directory)              |  |  KNOW ABOUT US                   |  |
|  |  -----------------------------------------------  |  |  • Mission & Ambedkarite Roots   |  |
|  |  🏛️ Central District Library (12,450 titles)       |  |  • How Book Circulation Works    |  |
|  |  🏛️ Ambedkar Memorial Reading Room (6,200 titles)  |  |  ------------------------------  |  |
|  |  🏛️ Saraswati Vidya Book Trust (8,100 titles)     |  |  FREQUENTLY ASKED QUESTIONS      |  |
|  |  🏛️ Youth Welfare Study Circle (4,300 titles)     |  |  • How do I collect books?      |  |
|  |                                                   |  |  • How are returns tracked?      |  |
|  |  [ Explore All 140+ Partner Libraries -> ]        |  |  ------------------------------  |  |
|  |                                                   |  |  [ WHY WE ARE: Our Manifesto ]   |  |
|  +---------------------------------------------------+  +----------------------------------+  |
+-----------------------------------------------------------------------------------------------+
```

---

### 3.2 Multi-Library Search & Availability Matrix
When a reader searches for a required volume (e.g., *"NCERT Indian Physical Geography"*), the platform surfaces a cross-library comparison grid:

* **Location-Aware Results:** Displays nearest physical libraries holding the title.
* **Edition & Condition Details:** Transparency regarding book condition (Good / Fair) and publication year.
* **Borrowing Tenure:** Permissible lending window (e.g., 5 days, 10 days, 15 days).
* **Live Visual Availability Badges:**
  * 🟢 **Green `[✓]`:** In stock, ready for immediate reservation and pickup.
  * 🔴 **Red `[✗]`:** Currently issued to another reader (with an option to join a waitlist).

```
+---------------------------+------------------------+------------------+-----------------------+---------------------+
| Library Name              | Book & Edition         | Allowed Duration | Live Stock Status     | Action              |
+---------------------------+------------------------+------------------+-----------------------+---------------------+
| Central District Library  | NCERT Class 11 (Ed. 7) | Up to 15 Days    | 🟢 In Stock           | [ Select Library 1 ]|
| Ambedkar Memorial Library | NCERT Class 11 (Ed. 6) | Up to 10 Days    | 🟢 In Stock           | [ Select Library 2 ]|
| Youth Welfare Reading Room| NCERT Class 11 (Ed. 7) | Up to 5 Days     | 🔴 Currently Borrowed | [ Notify When Free ]|
+---------------------------+------------------------+------------------+-----------------------+---------------------+
```

---

### 3.3 Anti-Theft Trust Protocol & Borrower Verification ("About Lib-1")
A primary friction point for public libraries is fear of asset loss or unreturned books. Swaraj Books solves this through a mandatory, paperless verification modal before reservation:

```
+-----------------------------------------------------------------------------------+
|  BORROWER DECLARATION & VERIFICATION — Central District Library                   |
+-----------------------------------------------------------------------------------+
|  Book: NCERT Indian Physical Geography (Class 11) | Permitted Duration: 10 Days   |
|                                                                                   |
|  MANDATORY IDENTITY VERIFICATION (Safeguarding Public Assets)                     |
|  -------------------------------------------------------------------------------  |
|  1. Aadhaar e-Sign Verification:                                                  |
|     Instant identity confirmation via Aadhaar OTP, establishing legal accountability.|
|                                                                                   |
|  2. Live Camera Photograph:                                                       |
|     Real-time selfie capture at reservation to ensure the registered borrower is  |
|     the individual collecting the title.                                          |
|                                                                                   |
|  3. Digital Signature & Solemn Declaration:                                       |
|     Touchpad/mouse signature on the borrower declaration:                         |
|     "I declare to return this book in good condition on or before the due date.   |
|      I acknowledge that failure to return impacts the community and library."     |
|                                                                                   |
|  [ Cancel ]                                       [ Confirm & Reserve Book ]      |
+-----------------------------------------------------------------------------------+
```

---

## 4. Academic Programs: Annual Curriculum Book Bank

In addition to short-term book circulation, the platform introduces a specialized **Annual Academic Pass** for school students and long-term aspirants:

* **Curriculum Bundles:** Complete textbook sets (e.g., Class 9–12 NCERT curriculum sets) are loaned out for the full academic year.
* **Return in Good Condition:** Students commit to caring for the books and returning them at the end of the school year.
* **Revolving Circulation:** Returned book sets are re-inspected and re-issued to the next incoming cohort of students, establishing a sustainable, recurring community book bank.

---

## 5. Value Proposition for Partner Libraries

1. **Re-energizing Inactive Spaces:** Brings students and readers back into community libraries, restoring their role as vibrant cultural centers.
2. **Zero Capital Expenditure:** Libraries require no new computers or cataloging software; the Swaraj Books network handles discovery and verification.
3. **Guaranteed Accountability:** With mandatory Aadhaar e-Sign, live photo capture, and digital signatures, libraries retain complete tracking and zero theft risk.
4. **Preserving Local Knowledge:** Preserves rare, out-of-print, and regional language volumes that commercial retailers do not stock.

---

## 6. Phased Implementation Roadmap

* **Phase 1: Pilot Catalog Aggregation (Months 1–2):** Onboard 10 initial community libraries; digitize physical shelf catalogs; launch the public search portal.
* **Phase 2: Multi-Library Availability Matrix (Months 3–4):** Implement real-time stock indicators (Green/Red), proximity sorting, and library reservation flows.
* **Phase 3: Digital Trust & Anti-Theft Flow (Months 5–6):** Roll out Aadhaar e-Sign integration, real-time photo capture, and digital signature storage.
* **Phase 4: School Curriculum Book Bank (Months 7–8):** Partner with local high schools and study circles to deploy the 1-year NCERT book bank program.
* **Phase 5: Regional Expansion (Month 9 Onward):** Partner with municipal corporations and state library boards to scale across districts.
