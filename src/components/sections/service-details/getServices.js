import img1 from "@/assets/img/service/new_services/1.png";
import img2 from "@/assets/img/service/new_services/2.jpeg"
import img3 from "@/assets/img/service/new_services/3.jpg"
import img4 from "@/assets/img/service/new_services/4.jpg"
import img5 from "@/assets/img/service/new_services/5.jpg"
import img6 from "@/assets/img/service/new_services/6.jpg"



const services = [
    {
    "id": 1,
    "title": "Concierge Planned Maintenance",
    "imageLarge": img1,
    "shortDescription": "Proactive OEM-guided maintenance designed to maximize uptime and reduce unexpected breakdowns.",
    "longDescription": [
      "Our Concierge Planned Maintenance (PM) program is built around OEM-recommended service intervals to ensure your equipment remains safe, compliant, and fully operational. During scheduled PM visits, technicians inspect each asset, log maintenance tasks, and proactively identify parts that may require attention before they fail. This reduces emergency repair requests and increases uptime across all your gyms.",
      "FRC provides a structured workflow for tracking completed PM tasks, documenting asset health, and generating service recommendations. Gyms benefit from predictable visit schedules, consolidated reporting, and better long-term equipment performance. PM programs typically result in reduced warranty issues and significantly improved equipment lifespan."
    ]
  },
  {
    "id": 2,
    "title": "Non Warranty Equipment Repair Work",
    "imageLarge": img2,
    "shortDescription": "Fast, reliable repair services for out-of-warranty assets to restore full functionality and reduce downtime.",
    "longDescription": [
      "When equipment issues fall outside OEM warranty coverage, FRC delivers efficient non-warranty repair services performed by trained and certified technicians. Whether addressing mechanical failures, electrical faults, or wear-and-tear components, our team ensures issues are diagnosed accurately and resolved quickly.",
      "Technicians capture detailed notes, photos, and parts usage to maintain a full service history for each asset. This helps gym owners track recurring issues, identify replacement needs, and maintain a complete equipment performance record. Non-warranty service requests can be tagged as billable or non-billable and are included in monthly consolidated invoicing."
    ]
  },
  {
    "id": 3,
    "title": "Warranty Facilitation From Manufacturer",
    "imageLarge": img3,
    "shortDescription": "Seamless OEM warranty management, including required documentation and claim submission support.",
    "longDescription": [
      "FRC assists gym owners by managing the entire OEM warranty process. Technicians collect the manufacturer-required photos, serial numbers, and defect details during the initial visit. Admin staff then extract and organize all uploaded images and documentation needed for warranty claim submission.",
      "This streamlined workflow ensures each claim meets OEM standards and minimizes back-and-forth with the manufacturer. With accurate asset records and consistent documentation, gyms benefit from quicker approval times and less administrative burden. Warranty vs. non-warranty jobs are clearly tagged to support correct billing and reporting."
    ]
  },
  {
    "id": 4,
    "title": "Equipment Relocation",
    "imageLarge": img4,
    "shortDescription": "Professional equipment disassembly, transport, and re-assembly for gym moves or room reconfigurations.",
    "longDescription": [
      "Relocating fitness equipment requires skilled handling to prevent damage and ensure that assets are reassembled correctly. FRC technicians specialize in carefully disassembling, labeling, transporting, and reinstalling a wide range of commercial fitness equipment. Each relocation project is planned to minimize operational disruption and ensure every unit is placed, leveled, and tested.",
      "A detailed asset map is created to track equipment before and after the move, helping gym managers maintain accurate equipment records. Relocation services can also include optional preventative maintenance inspections during re-assembly to ensure optimal performance after transport."
    ]
  },
  {
    "id": 5,
    "title": "Equipment Delivery and Installation",
    "imageLarge": img5,
    "shortDescription": "Full-service installation of new equipment, including calibration, setup, and quality verification.",
    "longDescription": [
      "FRC provides delivery and installation services for new commercial fitness equipment, ensuring each unit is assembled to manufacturer specifications. Our technicians handle all aspects of installation, from hardware assembly and calibration to electrical configuration and safety testing. This ensures equipment is ready for immediate use and fully compliant with OEM guidelines.",
      "Post-installation checks verify smooth operation and proper functionality across all moving and electronic components. Technicians also log serial numbers and asset details so they can be added to the system for future maintenance, warranty tracking, and QR code labeling."
    ]
  },
  {
    "id": 6,
    "title": "Equipment Extraction",
    "imageLarge": img6,
    "shortDescription": "Safe removal and decommissioning of outdated, damaged, or end-of-life fitness equipment.",
    "longDescription": [
      "When equipment reaches the end of its usable lifespan or must be removed to make space for new assets, FRC offers professional extraction services. Our team handles disassembly, safe removal, and logistical coordination to ensure equipment is taken offsite without disruption to gym operations.",
      "Removed assets can be cataloged for disposal, recycling, or resale depending on your facility's needs. Extraction can also be paired with delivery and installation services to streamline facility upgrades and reduce downtime."
    ]
  }
]


export default function getServices() {
    return services;
}