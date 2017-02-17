// footer component for DKWSite
components.component('search', {
   bindings: {},
	controller: function ($stateParams, $sce, $location) {
      var ctrl = this;
      ctrl.searchData = {
        "solutions":[
          {"sectionTitle":"Enterprise Net-Centric Solutions", "image":"images/teamwork.jpg","state":'app.solutions.netCentricSolutions({Id:""})',
          "content":[
            {"type":"text", "content":"DKW designs, engineers, deploys, and maintains a full range of software, database, and web information systems through a structured, disciplined set of proven systems and application software engineering practices and life cycle maintenance techniques. These practices encompass the full life cycle development process from project analysis to project closeout for projects requiring the development or modification of systems and software. Our approach to defining the systems and software engineering practices is based on the Software Engineering Institute’s (SEI) Capability Maturity Model Integration (CMMI) Level 2 best practices, which have been assessed at Capability Maturity Model Integration (CMMI) Level 3."},
            {"type":"list", "content":["Since 2006, DKW has supported SPAWAR Atlantic in the application of sound software development, software engineering, and programming support, based our end-customers’ System Development Lifecycle (SDLC). Our team of software architects, engineers, developers, quality assurance testers, and technical writers have applied engineering, security, and scientific disciplines for a variety of financial management, medical, administrative, and logistics management applications, developing these applications using the classic waterfall or Agile development approach as best fit the client’s requirements.","DKW has been a significant contributor to the transformation of the Public Health Information System (PHIS), a critical USDA system used to protect our Nation’s food sources. This complex system consists of 800 database tables and 5.8 million lines of code."]},
            {"type":"text","content":"Since 2010, DKW has been providing CMMI DEV L3-appraised Information Technology Services (ITS) and Software Maintenance Support (SMS) for the PHIS application, which is a comprehensive, data-driven inspection system comprised of multiple applications that was developed to collect, mine and analyze inspection, surveillance and investigative data; predict hazards and vulnerabilities; communicate or report analysis results; and target resources to prevent or mitigate the risk of food borne illness and threats to the nation’s food supply. DKW has been the key enabler for USDA in implementing required enhancements to FSIS through waterfall, agile, and hybrid software development methodologies, and we have transitioned 11 USDA legacy systems in the process."},
            {"type":"text","content":"DKW has worked closely with FSIS as it implemented a phased approach to the continual development and maintenance of PHIS to ensure that FSIS employees and other users of PHIS could accomplish their primary objectives without interruption of business operations. This phased approach sought to stabilize, optimize, and then transform PHIS."},
            {"type":"list","content":["DKW is prime contractor in support of the Global Information Grid (GIG) Technical Guidance Federation (GTG-F), which is a suite of software applications on the NIPRNet and SIPRNet that provide technical guidance across the DISA Enterprise to achieve net-ready, interoperable, and supportable GIG systems. The GTG-F assists program managers, portfolio managers, engineers, and others in answering two questions critical to any IT or National Security Systems (NSS): (1) Where does the IT or NSS fit, as both a provider and consumer, into the GIG with regard to End-to-End technical performance, access to data and services, and interoperability?; and (2) What must an IT system or NSS do to ensure technical interoperability with the GIG? Several of the GIG Technical Guidance business processes have joined together as a single Web destination that has provided several advantages to our clients, such as ease of use, reduced hosting costs, and increasing data availability to the DoD community. DKW architects, designs, develops, implements, and provides maintenance for the GTG Federated Tools Suite. It is the authoritative source for ISP assessment data, GTPs with implementation guidance, and compliance. The GTG Federated Tools Suite program is a key enabler of the ongoing DISA-led IT enterprise transformation.","DKW modernized the Navy Fleet’s Sensitive Compartmented Information (SCI) Network Operations Center (NOC), which was formerly an antiquated network with an overly complex footprint that was difficult to manage. DKW analyzed the system architecture, the CONOPS, and the security environment to identify which areas needed to be improved and which vulnerabilities needed to be addressed. DKW discovered that the hardware and software were in some cases at end-of-life, a situation which the Navy deemed an unacceptable level of risk."]},
            {"type":"text","content":"DKW provided the Fleet SCI NOC with solutions that mitigated the risks, including replacement of older Cisco routers and Catalyst switches with upgraded components, reducing the overall footprint and complexity and increasing overall efficiency as well as virtualizing the hardware using VMware."}
          ],
          "items":[
          {"title":"Application Development", "state":'app.solutions.netCentricSolutions({Id: "application-development" })', "image":"images/appdev2.jpg", "content":[{"type":"text", "content":"DKW’s Application Development service offerings provide application consulting, custom application development, testing, and quality assurance. We develop high quality business applications that increase operational efficiency and sustain your competitive advantage. DKW’s Applications Development allow your organization to take advantage of emerging technologies while offering a substantial reduction in capital expenditure, improved responsiveness to business demands, increased agility, and a faster time to market. We combine deep industry experience, highly skilled resources, and proven processes to deliver software solutions that fully support your goals. In addition, DKW’s cloud-based development platform allows us to develop and deliver applications across a multitude of platforms and technologies." }]},
          {"title":"C5ISR", "state":'app.solutions.netCentricSolutions({Id: "c5isr" })',"image":"images/c5sir1.jpg", "content":[{"type":"text", "content":"DKW’s C5ISR professionals have experience in the design, installation, configuration, testing, and/or going support of a wide range of systems, such as: Messaging & Communications Systems, Tactical Systems, Enterprise IT Infrastructure, Cyber Defense Systems, and Intelligence Systems. DKW is capable of supporting virtually any C5ISR support requirement, from the Enterprise-level engineering to end-user desktop support, both on GENSER and SCI platforms. Our mission-focused team is experienced in working around operational, technical, and administrative challenges to deliver our customers exceptional support. DKW’s services are highly customized to meet the unique needs and expectations of our customers." }]},
          {"title":"Datacenter Support", "state":'app.solutions.netCentricSolutions({Id: "datacenter-support" })',"image":"images/datacenter1.jpg", "content":[{"type":"text", "content":"DKW delivers scalable, reliable, and secure Data Center Support solutions to help maximize your existing technology investments and better meet your current and future technology needs. DKW offers some of the most reliable and affordable data center services in the industry. Our experienced staff of certified engineers are available at all hours of the day or night to provide the data center services you need to keep your business running. Our data centers offer various options for power, space, managed IT and hosting, virtual solutions, and cloud solutions. With years of experience managing, maintaining, and operating data center facilities, you can be assured that your critical data assets are secure and available." }]},
          {"title":"Healthcare IT", "state":'app.solutions.netCentricSolutions({Id: "healthcare-it" })',"image":"images/healthIT1.jpg", "content":[{"type":"text", "content":"DKW delivers a wide range of Healthcare IT solutions—from addressing back office functions and electronic medical records to clinical transformation and consumer engagement. DKW can assess your readiness from a technological perspective, build a Healthcare IT solutions roadmap, and bring your systems up to standard to support HIPAA requirements for patient data protection and support. Our commitment to value begins at architecture and extends to installation, monitoring, and maintenance. At DKW, we employ our cross-industry experts to bring the IT expertise in areas such as server consolidation, virtualization, remote access, high availability services, effective data communications architecture, wireless deployments, centralized vendor management, and proactive systems monitoring and management to healthcare. <br> Your medical practice can benefit from partnering with DKW for your technology support needs. We can help you make sense of technology and manage it efficiently and effectively so you can focus on your primary concern: patient care."}]},
          {"title":"IT Service Management", "state":'app.solutions.netCentricSolutions({Id: "it-service-management" })',"image":"images/itman2.jpg", "content":[{"type":"text", "content":"DKW’s IT Service Management solutions enable you to implement repeatable, measurable processes for defining, transitioning, delivering, and supporting services and assets throughout their life cycles. By integrating and automating Information Technology Infrastructure Library (ITIL) processes, you can utilize resources and control changes more efficiently, while streamlining the workload for your IT staff. With our comprehensive management capabilities, we can improve the quality of your services, prevent interruptions, and lower costs—all of which helps to ensure that your services stay aligned with your business requirements." }]},
          {"title":"IV&V", "state":'app.solutions.netCentricSolutions({Id: "iv&v" })',"image":"images/ivv2.png", "content":[{"type":"text", "content":"DKW’s Independent Verification and Validation (IV&V) processes provide an objective assessment of software products and processes throughout the software life cycle in an environment organizationally free from the influence, guidance, and control of the development effort. Our IV&V methodology is consistent with the latest systems engineering and process improvement models, and it has been assessed by the Capability Maturity Model Integration (CMMI)." }]},
          {"title":"Mobile Solutions", "state":'app.solutions.netCentricSolutions({Id: "mobile-solutions" })',"image":"images/mobilesolutions1.jpg", "content":[{"type":"text", "content":"DKW is a global provider of mobile solutions software for businesses of all sizes. By using our industry-leading experience, we develop easy-to-use, feature-rich mobile applications that extend the reach of your organization and employees. Our mobile experts are well equipped to help you extend existing technology solutions or develop new investments in cloud infrastructure to increase connectivity, collaboration, and productivity across your entire business." }]},
          {"title":"Operations and Maintenance", "state":'app.solutions.netCentricSolutions({Id: "operations-and-maintenance" })',"image":"images/itmain1.jpg", "content":[{"type":"text", "content":"DKW provides a broad range of IT operations support and maintenance services for a number of Federal civilian and DoD customers; we assist over 20,000 users located across the U.S. and around the world. The expansion, diversity, and increased sophistication of technology combined with our customers’ broad multi-site install-base requires that DKW be able to provide integrated service support and service delivery in all areas of communications, problem resolution, configuration management, and hardware and software operations and maintenance." }]},
          {"title":"Service Desk", "state":'app.solutions.netCentricSolutions({Id: "service-desk" })',"image":"images/serviceDesk1.jpg", "content":[{"type":"text", "content":"DKW’s Service Desk operations are delivered through a consistent set of tools and processes, using an ITIL based approach to IT Service Delivery. DKW has diverse experience in transitioning customers from multiple Helpdesks to a centralized Service Desk, which also leads to standardization across enterprise operations." }]},
          {"title":"Systems Engineering", "state":'app.solutions.netCentricSolutions({Id: "systems-engineering" })',"image":"images/systemseng1.jpg", "content":[{"type":"text", "content":"DKW’s proven ability to deliver quality products, while also meeting budget and schedule requirements is what makes us the premier service provider in the industry. DKW’s comprehensive and accurate requirements management process ensures that systems with well-designed hardware and software features meet exactly what users want and need. Our experience is essential as we work closely with clients, partners, and end-users to clearly define user needs and system requirements, and we deliver value at each step in the process. DKW’s systems engineers integrate all engineering disciplines into an efficient, streamlined process that smoothly takes the project from concept to production to operation, in order to meet our customer’s business and technical goals." }]},
          {"title":"Disability Accommodations", "state":'app.solutions.netCentricSolutions({Id: "disability-accommodations" })',"image":"images/disability1.jpg", "content":[{"type":"text", "content":"DKW is committed to providing equal employment opportunity to all job seekers. If you are an individual with a disability who is unable to use our online tools to search and or apply for jobs, please send an email to disability-accommodations@199.230.117.121/dkwcomm and indicate the specifics of the assistance you need, or please contact the Disability Accommodations Office at 202-355-7400. This option is reserved only for individuals who are unable to use the online tools due to a disability or medical issue. It is not intended for other purposes or inquiries."}]}
        ]}],
        "news":[
          {"date":"", "title":"DKW is now certified as a Local Disadvantaged Business Enterprise", "image":"","content":"DKW is now certified as a Local Disadvantaged Business Enterprise (LDBE) with the Metropolitan Washington Airports Authority (Authority) Expiration Date January 20, 2018"},
          {"date":"", "title":"DKW Selected By the U.S. Marine Corps to Manage Eight Data Centers in San Diego, California", "image":"","content":"DKW was recently awarded a $4.5 million dollar contract with the U.S. Marine Corps to provide network analysis, data center planning, IT project management, network and facilities engineering, and implementation and testing of network designs for eight data centers located in San Diego, California."},
          {"date":"", "title":"DKW Awarded New Contract to Provide IT Support Services to the U.S. Department of Interior", "image":"","content":"The U.S. Department of Interior, Office of Natural Resources Revenue (ONRR) recently selected DKW Communications, Inc. to support its IT operations at its Denver Federal Center in Lakewood, Colorado. ONRR is responsible for the management of revenues associated with Federal offshore and Federal and American Indian onshore mineral leases, as well as revenues received as a result of offshore renewable energy efforts. ONRR also ensures that the nation’s Federal and American Indian natural resources revenues are accurately reported and paid in compliance with laws, regulations, and lease terms. DKW will provide applications development and Documentum support, IT helpdesk support, and database administration."},
          {"date":"", "title":"DKW Awarded $10 Million Dollar Contract to Provide Software Development Services to the United States Department of Agriculture (USDA), Food Safety and Inspection Service", "image":"","content":"The Unites States Department of Agriculture (USDA), Food Safety and Inspection Service (FSIS) selected DKW to provide ongoing software maintenance for its Public Health Information System (PHIS) which supports FSIS in protecting the U.S. food supply by ensuring that our commercial supply of meat, poultry, and egg products is safe, wholesome, and correctly labeled and packaged."}
        ],
        "contractVehicles":[
          {"sectionTitle":"Alliant Small Business Governmentwide Acquisition Contract (GWAC)", "content":"This contract vehicle provides a common framework and terminology for defining and understanding the components of an IT solution. Alignment with the FEA and DoDEA enables Alliant Small Business to evolve over time as technologies change without requiring a technical refresh. It also conforms to the Office of Management and Budget (OMB) policy mandates for reporting on IT investments. Low 0.75 percent contract access fee GWACs have the same low fee as GSA Schedules. Access to all types of task orders Alliant Small Business features fixed-price, cost-reimbursement, labor-hour, and time-and-materials task order types, which provide greater flexibility in procuring different types of IT products and services and meeting your mission requirements. How Federal agencies have used Alliant Small Business Operating an information assurance response center One small business was awarded a $52 million task order to operate the Department of Energy’s National Nuclear Security Administration’s (NNSA) Information Assurance Response Center (NIARC) in Las Vegas, NV. Providing IT and cyber support for a CIO’s office The Department of Energy’s National Nuclear Security Administration (NNSA), Office of the Chief Information Officer awarded a $70 million task order to a small business. Encouraging maximum small business utilization in contracting The Department of Defense issued a memo on July 14, 2011, encouraging the use of Alliant Small Business, among other small business GWACs, to meet the Department’s small business contracting and information technology needs. Read the memo (PDF, 145 KB). Increasing competition while reducing acquisition cycle time The Department of the Navy recently conducted a General IT Development and Support Services strategic sourcing analysis, which focused on cost savings. They recommended increasing the use of existing contract vehicles to generate greater competition while reducing cycle time, including the Alliant Small Business GWAC. Alliant Small Business will work with the Navy team to establish and deliver training opportunities. The link to this Web page is www.gsa.gov/alliantsb."},
          {"sectionTitle":"8(a) STARS II Governmentwide Acquisition Contract (GWAC)", "content":"Two constellations based on industry accreditation 8(a) STARS II industry partners are classified in two constellations. Industry partners in both constellations have competitive pricing and technical proficiency. Constellation II also includes industry partners with an additional industry credential, such as Capability Maturity Model Integration (CMMI) or ISO 9001 (quality management system). Access to multiple types of task orders 8(a) STARS II offers fixed price, time and materials, labor hour, and blended task order types, which provides greater flexibility in procuring different types of IT products and services and meeting your mission requirements. How Federal agencies have used 8(a) STARS II Encouraging maximum small business utilization in contracting The Department of Defense issued a memo on July 14, 2011, encouraging the use of 8(a) STARS II, among other small business GWACs, to meet the Department’s small business contracting and IT needs. Read the July 14, 2011 memo (PDF, 146 KB).The link to this Web page is www.gsa.gov/stars2."},
          {"sectionTitle":"OPM IT Services BPA (OPM-32-12-A-0036)", "content":"The Office of Personnel Management (OPM) has issued an IT Services BPA (Blanket Purchase Agreement) to provide the OPM Office of the Chief Information Officer (CIO) with numerous IT services, including network operations and security, data center operations, applications and database software development, Web development, and other support services. The Chief Information Officer, Operations Technology Management, Network Management (NM) supports the OPM mission by managing and operating OPM’s IT infrastructure. This includes the implementation, management, and maintenance of workstations, local and wide area networks (LAN/WAN), data communications, servers, storage area networks (SAN), and IT security initiatives. A BPA is not a contract; rather, it is used by approved agencies to order and pay for supplies and services that they purchase from approved vendors. In the case of the OPM IT Services BPA, the approved vendor is DKW Communications, Inc., the prime contractor on Special Technical Area (STA) 1, which entails Application Systems and Database Development and Maintenance and Special Technical Area (STA) 4, which entails Network and Server Operations and Maintenance, Security Services, Project Management, and Engineering."}
        ]
      };

      ctrl.searchResults = {"all": [], "filtered":[], "displayed":[], "displaySection":"all", "page":1, "totalPages":[], "displayNum":10, "displayInc":[10,20,50] };

      ctrl.highlightSearch = function(text){
          if(text == undefined){
            return text;
          }
          else {
            return $sce.trustAsHtml(text.replace(new RegExp(ctrl.Id, 'gi'), '<span class="highlightedText">$&</span>'));
          }
      }
      function stringPreview(starterIndex, content, length){
        var starter = 0;
        // get to space before word
        do {
          if(starterIndex == 0){
            starter = 2;
          }
          else if(content[starterIndex] == " ") {
            starter++;
            if(starter < 2){ starterIndex--; }
          }
          else {
            starterIndex--;
          }
        } while ( starter < 2);

        var returnStr = content.substring(starterIndex);
        return returnStr;
      }

      ctrl.getItemNum = function(type){
        if(type == "min"){
          return (1 + ((ctrl.searchResults.page-1) * ctrl.searchResults.displayNum));
        }
        else if(type=="max"){
          var calcMax = (ctrl.searchResults.page * ctrl.searchResults.displayNum);
          return (ctrl.searchResults.filtered.length < calcMax ? ctrl.searchResults.filtered.length : calcMax );
        }
      }
      ctrl.getPreview = function(content, length){
        if(typeof content == 'string'){
          var queryIndex = content.toLowerCase().indexOf(ctrl.Id.toLowerCase());
          var returnString = "";
          if(queryIndex < 0){
            returnString = content.substring(0, length) + "...";
          }
          else {
            returnString = "..."+stringPreview(queryIndex, content, length).substring(0, length ); +"...";
          }
          return returnString;
        }
        else if( Object.prototype.toString.call( content ) === '[object Array]' ) {
          for(var i =0; i < content.length; i++){
            var contentObj = content[i];
            if(contentObj.type == "text"){
              var queryIndex = contentObj.content.toLowerCase().indexOf(ctrl.Id.toLowerCase());
              var returnString = "";
              if(queryIndex < 0){
                returnString = contentObj.content.substring(0, length) + "...";
              }
              else {
                returnString = "..."+ stringPreview(queryIndex, contentObj.content, length).substring(0, length )+"...";
                return returnString;
              }
            }
            else if(contentObj.type == "list"){
              for(var j=0; j < contentObj.content.length; j++){
                var listItem = contentObj.content[j];
                var queryIndex = listItem.toLowerCase().indexOf(ctrl.Id.toLowerCase());
                var returnString = "";
                if(queryIndex < 0){
                  returnString = listItem.substring(0, length) + "...";
                }
                else {
                  returnString = "..."+ stringPreview(queryIndex, listItem, length).substring(0, length )+"...";
                  return returnString;
                }
              }
            }
          }
          return returnString + "...";
        }
        else {
          return "";
        }
        return "__";
      }
      ctrl.getResults = function(query){
        var allResults = [];
        // Search Solutions
        allResults = allResults.concat(searchSolutions(query));
        // Search News
        allResults = allResults.concat(searchNews(query));
        // Search Contract Vehicles
        allResults = allResults.concat(searchContractVehicles(query));

        var object = [];
        if (allResults.length == 0) {
          // not found
        } else {
          // multiple items found
          object = allResults.sort(function(a, b) { return b.hits - a.hits; });
        }
        ctrl.searchResults.all = object;

        //set display results
        ctrl.searchResults.filtered = ctrl.searchResults.all;
        ctrl.searchResults.totalPages = new Array(Math.ceil(ctrl.searchResults.filtered.length / ctrl.searchResults.displayNum));
        ctrl.searchResults.displayed = ctrl.searchResults.filtered.slice(0, ctrl.searchResults.displayNum);
      }

      ctrl.setDisplayPage = function(page){
        ctrl.searchResults.page = page;
        var min = (page-1) * ctrl.searchResults.displayNum;
        var max = min + ctrl.searchResults.displayNum;
        ctrl.searchResults.displayed = ctrl.searchResults.filtered.slice(min, max);
      }
      ctrl.setDisplayPageSize = function(size){
        ctrl.searchResults.displayNum = size;
        var min = 0;
        var max = ctrl.searchResults.displayNum;
        ctrl.searchResults.totalPages = new Array(Math.ceil(ctrl.searchResults.filtered.length / ctrl.searchResults.displayNum));
        ctrl.searchResults.displayed = ctrl.searchResults.filtered.slice(min, max);
      }
      ctrl.setDisplaySection = function(section){
        ctrl.searchResults.displaySection = section;
        if(section == 'all'){
          ctrl.searchResults.filtered = ctrl.searchResults.all;
        }
        else {
          ctrl.searchResults.filtered = $.grep(ctrl.searchResults.all, function(e){ return e.section == section });
        }
        ctrl.searchResults.page = 1;
        ctrl.searchResults.totalPages = new Array(Math.ceil(ctrl.searchResults.filtered.length / ctrl.searchResults.displayNum));
        ctrl.searchResults.displayed = ctrl.searchResults.filtered.slice(0, ctrl.searchResults.displayNum);
      }

      function searchSolutions(query){
        var dataObj = ctrl.searchData.solutions;
        var results = [];
        for(var i =0; i < dataObj.length; i++){
          var data = dataObj[i];
          // check home page
          var result = solutionsObjSearch(data, query, true);
          if(result.title != "") {
            results.push(result);
          }
          // check each subpage
          for(var k=0; k < data.items.length; k++){
            var result = solutionsObjSearch(data.items[k], query, false);
            if(result.title != "") {
              results.push(result);
            }
          }
        }

        return results;
      }

      function solutionsObjSearch(data, query, header){
        var result = {"title":"", "section":"solutions", "content":"", "state":"", "hits":0};

        if(header){
          //if(data.sectionTitle.toLowerCase().indexOf(query.toLowerCase()) != -1){
          var matches = (data.sectionTitle.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          if(matches > 0){
            result.title = data.sectionTitle;
            result.content = data.content;
            result.state = data.state;
            result.hits += matches;
          }
        }
        else {
          //if(data.title.toLowerCase().indexOf(query.toLowerCase()) != -1){
          var matches = (data.title.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          if(matches > 0){
            result.title = data.title;
            result.content = data.content;
            result.state = data.state;
            result.hits += matches;
          }
        }

        for(var j =0; j < data.content.length; j++){
          var object = data.content[j];
          if(object.type == "text"){
            //if(object.content.toLowerCase().indexOf(query.toLowerCase()) != -1){
            var matches = (object.content.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
            if(matches > 0){
              if(result.title == ""){
                result.title = (data.sectionTitle != undefined ? data.sectionTitle : data.title);
                result.content = data.content;
                result.state = data.state;
              }
              result.hits += matches;
            }
          }
          else if(object.type == "list"){
            var objList = $.grep(object.content, function(e){ return e.toLowerCase().indexOf(query.toLowerCase()) != -1 });
            if(objList.length > 0){
              if(result.title == "") {
                result.title = (data.sectionTitle != undefined ? data.sectionTitle : data.title);
                result.content = data.content;
                result.state = data.state;
              }
              result.hits += objList.length;
            }
          }
        }

        return result;
      }

      function searchNews(query){
        var dataObj = ctrl.searchData.news;
        var results = [];

        for(var i =0; i < dataObj.length; i++){
          var data = dataObj[i];
          // search title
          var titleMatches = (data.title.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          // search content
          var contentMatches = (data.content.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          if(titleMatches > 0 || contentMatches > 0){
            results.push({"title":data.title, "section":"news", "content":data.content, "state":"app", "hits":(titleMatches + contentMatches)});
          }
        }
        return results;
      }

      function searchContractVehicles(query){
        var dataObj = ctrl.searchData.contractVehicles;
        var results = [];

        for(var i =0; i < dataObj.length; i++){
          var data = dataObj[i];
          // search title
          var titleMatches = (data.sectionTitle.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          // search content
          var contentMatches = (data.content.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          if(titleMatches > 0 || contentMatches > 0){
            results.push({"title":data.sectionTitle, "section":"contractVehicles", "content":data.content, "state":"app", "hits":(titleMatches + contentMatches)});
          }
        }
        return results;
      }
      // Query string
      var paramID = $stateParams.searchquery;
      if(paramID != undefined && paramID != ""){
        ctrl.Id = paramID.replace(/-/gi, ' ');
        ctrl.getResults(ctrl.Id);
      }
      else {
        ctrl.selectedItem = ctrl.pageInfo;
      }

   },
   templateUrl: 'views/pageTemplates/search.html'
});
