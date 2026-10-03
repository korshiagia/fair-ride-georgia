# საქართველოს Fair Ride პლატფორმა — Master Specification

**ვერსია:** 0.1, დასაბუთებული foundation baseline  
**თარიღი:** 2026-10-03, Asia/Tbilisi  
**სამუშაო სახელი:** Fair Ride Georgia — ბრენდისა და სასაქონლო ნიშნის შემოწმება ჯერ არ ჩატარებულა.  
**სტატუსი:** პროდუქტისა და არქიტექტურის დაგეგმვა; პროგრამული პროდუქტი ჯერ არ განხორციელებულა.

## 1. მიზანი და დოკუმენტის წაკითხვის წესი

ვაშენებთ საქართველოსთვის მგზავრობის შეკვეთის სრულ პლატფორმას, რომლის უპირატესობაა მძღოლის გამჭვირვალე ეკონომიკა, მგზავრის პროგნოზირებადი ფასი და ორივე მხარისთვის სამართლიანი, გასაჩივრებადი მომსახურება. წარმატების საზომია შესრულებული, საიმედო მგზავრობა და მძღოლის შემოსავალი ონლაინ საათზე — აპის ჩამოტვირთვების რაოდენობა საკმარისი საზომი არ არის.

მომხმარებლის მიერ განსაზღვრული ხუთივე ქალაქი სრულ ფარგლებშია: **ზუგდიდი, ქუთაისი, ბათუმი, თბილისი, რუსთავი**. სხვადასხვა ქალაქის ჩართვა შეიძლება სხვადასხვა დღეს, ერთნაირი ხარისხის მოთხოვნების დაცვით. ყველა დაგეგმილი შესაძლებლობა გამოიყენებს იმავე production საფუძველს. ეტაპობრივი განვითარება არ ნიშნავს გადასაგდებ MVP-ს.

ამ baseline-ში ოთხი განსხვავებული სტატუსია:

| სტატუსი | მნიშვნელობა |
|---|---|
| განსაზღვრული მოთხოვნა | მომხმარებლის მიერ უკვე დადგენილი მიმართულება |
| არჩეული დაგეგმვის გადაწყვეტილება | ჩვენი არგუმენტირებული რეკომენდაცია; შედეგებით შეიძლება შეიცვალოს |
| წყაროთი დადასტურებული ფაქტი | წყარო და მოქმედების კონტექსტი მითითებულია research დოკუმენტებში |
| შესამოწმებელი ჰიპოთეზა / გარე gate | საჭიროებს რეალურ კვლევას, კონტრაქტს, იურისტის დასკვნას ან გაზომვას |

წინა ჩატის იდეები კონტექსტია. ისინი არ წარმოადგენს დადასტურებულ ბაზრის კვლევას, მოქმედ რეგულაციას ან დამტკიცებულ ბიზნეს-გარანტიას. წყაროების მიმდინარე სტატუსი იხილე [კვლევაში](research/MARKET-REGULATORY.md) და [წყაროების რეესტრში](research/SOURCE-REGISTER.md).

## 2. სრული პროდუქტის ფარგლები

### მგზავრი

- რეგისტრაცია და ნომრის დადასტურება; ანგარიშის აღდგენა, წაშლის მოთხოვნა და კონფიდენციალურობის მართვა.
- ქართული და ინგლისური ინტერფეისი; ხელით მისამართის არჩევა, თუ მდებარეობის ნებართვა არ არის გაცემული.
- ხელმისაწვდომი ქალაქი, pickup-ის გზასთან თავსებადი ადგილი, დანიშნულება, გაჩერებები და ავტომობილის კატეგორია.
- წინასწარი დეტალური ფასი და ETA; შეთავაზების მოქმედების ვადა; აშკარა მოთხოვნის დანამატი და ყველა ცნობილი ხარჯი.
- ავტომობილისა და მძღოლის დადასტურებული მონაცემები; ცოცხალი პროგრესი; კავშირის აღდგენისას სერვერიდან სრული მდგომარეობა.
- მიღებული arrival evidence, ლოდინის წესები, pickup PIN, გაუქმების მიზეზი და გადასახადის დასაბუთება.
- ნაღდი და ბარათით ანგარიშსწორება, ქვითარი, მხარდაჭერა, გასაჩივრება, დაკარგული ნივთი, შეფასება და ბლოკირება.
- უსაფრთხოების კონტაქტი და მგზავრობის გაზიარების დროებით მოქმედი ბმული; აპიდან 112-ზე დარეკვის მკაფიო შესაძლებლობა.
- დაგეგმილი შეკვეთა, აეროპორტი და ქალაქთაშორისი მგზავრობა; კორპორატიული ანგარიში შესაბამისი წესებით.

### მძღოლი

- პირადობის, მართვის უფლების, მანქანისა და იურისდიქციისთვის საჭირო დოკუმენტების შემოწმება; ვადის გასვლისას მუშაობის შეზღუდვა.
- Android native აპი, foreground location პროცესი და ქსელის/ბატარეის შეზღუდვების გასაგები სტატუსი.
- ონლაინ/ოფლაინ და კატეგორიის მართვა; შეთავაზების დრო, pickup, შეფასებული მანძილი/ხარჯი და მოსალოდნელი ანაზღაურება.
- მხოლოდ მოქმედი შეთავაზების მიღება; ერთი მძღოლის ერთდროული შეუთავსებელი დავალების გამორიცხვა.
- arrival evidence, PIN-ის უსაფრთხო დადასტურება, ნავიგაციის პროვაიდერისკენ გადასვლა, მისვლის პრობლემის დასაბუთებული გამონაკლისი.
- მოგზაურობის დასრულება, ფულის გადახდის ცალკე სტატუსი, საკომისიოს გაშლა, tips, cash balance, payout და reconciliation.
- დაბლოკვის მიზეზი, ადამიანთან გასაჩივრება, მგზავრთან დავის მტკიცებულებები და უსაფრთხოების მხარდაჭერა.
- სამუშაო დროისა და მგზავრობების შემოსავლის ჩვენება; ხარჯების შეტანის შესაძლებლობა, წმინდა მოგების დაუდასტურებელი დაპირების გარეშე.

Driver iOS წარმოადგენს დოკუმენტირებულ გაფართოებას. მის განხორციელებას განსაზღვრავს კვლევით დადასტურებული მძღოლების მოწყობილობების წილი და მხარდაჭერის ხარჯი; passenger iOS უკვე Flutter-ის პროდუქტის ფარგლებშია.

### ოპერაციები, ფლოტი და კორპორატიული კლიენტი

- ოპერატორის კონსოლი: მიმდინარე ქალაქები/ზონები, supply/demand, შეკვეთების ისტორია, დავები, უსაფრთხოების შემთხვევები, ინციდენტების მართვა.
- ფინანსური კონსოლი: payout, refund, cash დავალიანება, PSP reconciliation და ყველა კორექტირების აუდიტი.
- მძღოლის/მანქანის დამტკიცება, დოკუმენტების ვადები, ქალაქისა და კატეგორიის უფლებები.
- ტარიფებისა და გეოზონების ვერსიები, შეზღუდული წვდომა და მაღალი რისკის ცვლილებებზე მეორე დამმტკიცებელი.
- ფლოტის კონსოლი: მანქანები, მძღოლთან მიბმა, ხელშეკრულებით განსაზღვრული დაფარვა/ანგარიშსწორება, tenant-ის მონაცემების იზოლაცია.
- კორპორატიული კონსოლი: თანამშრომლები, ხარჯის ცენტრები, ლიმიტები, დამტკიცება, შეკვეთები, ანგარიშგება და ინვოისები.
- პარტნიორის airport/intercity პროცესები: meeting point, scheduling, no-show წესები, დადასტურება და შესაძლო ხელახალი მინიჭება.

## 3. ღირებულების შეთავაზება და კომერციული არჩევანი

**მგზავრისთვის:** ზუსტი პირობებით შეთავაზებული ფასი, pickup-ის გასაგები მტკიცებულება და ხელმისაწვდომი დავის გადაწყვეტა.  
**მძღოლისთვის:** გამჭვირვალე საკომისიო, დასაბუთებული წესები, ფულის სტატუსი და სამუშაო საათების ეკონომიკის ხილვადობა.  
**კორპორატიული/ფლოტისთვის:** კონტროლირებადი ხარჯი, მომსახურების ხარისხი და შეთანხმებული ანგარიშსწორება.

არჩეული საწყისი ბიზნეს-მოდელია **მგზავრობაზე გამჭვირვალე საკომისიო**, ფინანსურ სცენარში 15%-იანი სამუშაო ვარაუდით. ეს ჯერ შეთავაზების გამოქვეყნების ფასი არ არის. ჯერ უნდა შემოწმდეს საკომისიოს დასაბეგრი ბაზა, PSP-ის ხარჯი, support, acquisition და cash collection. მძღოლის tips მთლიანად მძღოლის შემოსავლის მხარეს განიხილება, საბოლოო საგადასახადო და PSP პირობების დაცვით.

99/249 ₾ subscription და 3–5%-იანი fee წინა ჩატში ილუსტრაციები იყო. მათი გაშვება საწყის ეტაპზე არ არის არჩეული: შეკვეთების არასაკმარისი სიმჭიდროვის პირობებში subscription მძღოლს წინასწარ აკისრებს რისკს. ასეთი პროდუქტი შეიძლება დაემატოს მხოლოდ დადასტურებული მოთხოვნისა და გასაგები სარგებლის შემდეგ, ცალკე ADR-ით.

გაშვებისთვის არჩეული მიმართულება არ არის „ყველაზე იაფი ტაქსი“. ფასის მდგრადობა მოწმდება თითო completed ride-ზე contribution margin-ით და მძღოლის ონლაინ საათზე ეკონომიკით. გარანტირებული შემოსავალი, უსასრულო subsidy და უსაფრთხოების აბსოლუტური გარანტია პროდუქტის დაპირებები არ არის.

სრული ფორმულები, ხარჯების საზღვრები და ფინანსური მაგალითები იხილე [BUSINESS-MODEL.md](BUSINESS-MODEL.md).

## 4. ხუთი ქალაქის ოპერაციული მოდელი

არჩეული დაგეგმვის თანმიმდევრობაა **ქუთაისი → ზუგდიდი → ბათუმი → თბილისი და რუსთავი**. ეს შესაცვლელი operational sequencing-ია, არა მტკიცება, რომ რომელიმე ქალაქში კონკურენცია ნაკლებია. ქუთაისით დაწყების მიზეზია ქალაქისა და აეროპორტის სცენარების ერთად შემოწმება; ზუგდიდი ამოწმებს რეგიონულ განსხვავებებს; ბათუმი — სეზონურობას; თბილისი/რუსთავი — უფრო დიდ და ურთიერთდაკავშირებულ მოძრაობას. თუ კვლევით საუკეთესო liquidity თბილისში დადასტურდება, თანმიმდევრობა უნდა შეიცვალოს.

| ქალაქი | აუცილებელი ცალკე შემოწმება |
|---|---|
| ქუთაისი | ქალაქის წესები, airport-ის რეალური pickup/dropoff უფლებები, meeting point, მოთხოვნის საათები |
| ზუგდიდი | მოქმედი ადგილობრივი რეჟიმი, მისამართების/გზების ხარისხი, რეგიონული მარშრუტები, ზონების დაფარვა |
| ბათუმი | სეზონურობის სცენარები, airport/პარკირების პირობები, პიკური საცობები, არასეზონური ფინანსები |
| თბილისი | მოქმედი A/B ნებართვები და კატეგორიები, pickup-ის ხელმისაწვდომობა, მრავალზონიანი dispatch |
| რუსთავი | ადგილობრივი რეჟიმი, თბილისთან intercity/cross-zone წესები, დაბრუნების და ცარიელი გარბენის ეკონომიკა |

სერვისის ქალაქი, მოთხოვნილი pickup-ის იურისდიქცია და მძღოლის ნებართვის მოქმედება ცალ-ცალკე ინახება. თბილისის წესები ავტომატურად არ გავრცელდება სხვა ქალაქზე. აეროპორტის მომსახურება ვერ ჩაირთვება მხოლოდ რუკაზე გეოფენსის შექმნით.

ქალაქის ჩართვამდე საჭიროა: დამტკიცებული წესები და ხელშეკრულებები, შესაბამის საათებში მძღოლების რეალური supply, readiness-ის დატვირთვის შემოწმება, staffed მხარდაჭერა, payment/payout reconciliation და საკვანძო პროდუქტული მაჩვენებლების მიღწევა. ეტაპობრივი ჩართვა არ ამცირებს ფინანსური, უსაფრთხოების ან privacy კონტროლების მოთხოვნას.

## 5. სრული მგზავრობის contract

1. მგზავრი ითხოვს quote-ს მოქმედი pickup/dropoff-ით. პასუხი შეიცავს fare policy version-ს, currency=GEL-ს, კომპონენტებს, პირობებს და ვადას.
2. quote-ის მიღება ქმნის უნიკალურ ride request-ს idempotency key-ით და quote-ის ერთჯერადი მიბმით. ჩვეულებრივ მგზავრს ერთდროულად ერთი immediate active trip შეუძლია ჰქონდეს: ორი მოწყობილობის სხვადასხვა key-ც ვერ შექმნის მეორეს; პასუხი დააბრუნებს არსებულ მგზავრობას ან conflict-ს. Scheduled booking ცალკეა; კორპორატიული დამკვეთი სხვადასხვა მგზავრისთვის ცალკე უფლებებით მოქმედებს.
3. dispatch ითვალისწინებს იურისდიქციას, მანქანის კატეგორიას, მდებარეობის სიახლეს, ETA-ს და მძღოლის current assignment-ს.
4. შეთავაზებას აქვს ვადა და generation. მძღოლის მიღება სერვერზე durable transaction-ით დადასტურდება; ერთი ride/driver/vehicle-ის მიმდინარე მინიჭება ექსკლუზიურია და მოწმდება მძღოლთან მანქანის მოქმედი მიბმა. აპის ღილაკი ან Redis lock თვითონ მინიჭების გარანტია არ არის.
5. კავშირის აღდგენა მოითხოვს snapshot-ს და trip version-ს. WebSocket შეტყობინება ინფორმირების გზაა; მონაცემის ერთადერთი წყარო არ არის.
6. arrival მტკიცდება მდებარეობის ხარისხით, დროით, გზასთან თავსებადი geofence-ით და მოძრაობის მდგომარეობით. საეჭვო ან დაკარგული GPS ავტომატურ ჯარიმას ვერ წარმოქმნის.
7. wait fee შეიძლება დაიწყოს მხოლოდ დასაბუთებული arrival-ისა და მგზავრისთვის დადგენილი შეტყობინების წესის შემდეგ. Grace period და ceiling ქალაქის policy-ში ინახება. ყველა თანხა გასაჩივრებადია.
8. მგზავრობის დაწყებას სჭირდება server-side PIN validation და მოქმედი assignment. Retry-ს აქვს შეზღუდვა; PIN-ის დაკარგვის exception აუდიტდება და არ გარდაიქმნება ჩუმ bypass-ად.
9. pickup/dropoff ან stops-ის ცვლილება მოითხოვს აშკარა ცვლილების პირობებსა და შესაბამის consent-ს. ტექნიკური სიგნალის შეცდომა quote-ის თვითნებურ გაზრდას ვერ გამოიწვევს.
10. completed trip, PSP capture, payout, dispute და refund დამოუკიდებელი მდგომარეობებია. დასრულებული მგზავრობა payment failure-ისას ისევ მიმდინარე მგზავრობად არ გადაიქცევა.
11. თანხის ყოველი მოძრაობა იწერება immutable ledger entries-ით; refund/correction არის ახალი ჩანაწერი. Receipt/ინვოისი ეფუძნება დადასტურებულ ფინანსურ შედეგს.
12. Scheduled booking არ არის მიმდინარე assignment. თუ კონკრეტული მძღოლი/მანქანა დაპირებულია, დროის ინტერვალი და deadhead buffer ცალკე capacity calendar-ში იჯავშნება; პარალელური გადაფარული დაპირებები იბლოკება და ცვლილება აუდიტდება.

მგზავრობის, გადახდისა და უსაფრთხოების სრული state machine და invariants განსაზღვრულია [ტექნიკურ სპეციფიკაციაში](TECHNICAL-SPEC.md).

## 6. Dispatch, fairness და pricing

საწყისი matching არის ვერსირებული deterministic rules engine. პირველი ფილტრი არის კანონიერად და ტექნიკურად ვარგისი კანდიდატი; შემდეგ ფასდება pickup ETA, pickup compatibility, idle time და კატეგორია. შეთავაზების უარყოფა ან დაბალი რეიტინგი თავისთავად ავტომატური დასჯის მიზეზი არ არის.

ყველა scoring კომპონენტს აქვს მიზანი, ცალკე გაზომვა, rollout version და rollback. ETA/idle fairness-ს შორის კომპრომისი იწერება, მოწმდება ზონითა და მოწყობილობის კლასით. GPS-ის დაბალი ხარისხი ან ახალბედა მძღოლის მონაცემების ნაკლებობა უნდა აღირიცხოს missingness-ად და არა ცუდ მძღოლად.

Dynamic pricing-ის საწყისი პოლიტიკა არის გამჭვირვალე, ზონაზე დაფუძნებული და capped. ზუსტი base/per-km/per-minute/minimum/cancellation/wait ფასები ამ foundation-ში არ არის დამტკიცებული: მათი არჩევა მოითხოვს ხუთი ქალაქის დაკვირვებას, route costs-ს და მძღოლის ეკონომიკას. ფორმულა და policy version თავიდანვე formal contract-ია.

ML/AI matching, pricing, fraud და support-სთვის არ წარმოადგენს საწყისი core-ის dependency-ს. მათი დამატება მოითხოვს reference dataset-ს, privacy review-ს, offline/shadow შეფასებას, subgroup fairness-ს, drift/rollback-ს და ადამიანის გასაჩივრებას. AI ვერ გააუქმებს safety incident-ს ან თვითონ დაამტკიცებს payout კორექტირებას.

## 7. ეკრანები და აუცილებელი მდგომარეობები

ეს არის პროდუქტის interaction inventory. Phase-specific UI-SPEC დაამატებს კომპონენტებს, copy-სა და ვიზუალურ contract-ს; უბრალოდ ლამაზი mockup ფუნქციურ სპეციფიკაციას ვერ ჩაანაცვლებს.

| ზედაპირი | ძირითადი ეკრანები | აუცილებელი ალტერნატიული მდგომარეობები |
|---|---|---|
| Passenger | Sign-in, pickup/dropoff, quote, search, assigned, arrival/PIN, active trip, receipt, support, settings | permission denied, no coverage, quote expired, no supply, offline, stale location, payment retry, accessible manual address |
| Driver | Enrollment, documents, eligibility, home/online, offer, route/arrival, PIN, trip, earnings/payout, appeal | expired document, expired offer, already assigned, offline, background service stopped, GPS inaccurate, cash debt review, incident |
| Operations | City health, trip details, driver approval, disputes, incidents, policies, audit | restricted record, redacted PII, two-person approval pending, concurrency conflict, source unavailable |
| Corporate | Members, policy, cost centers, order, approvals, trips, invoice | limit exceeded, approval denied, employee removed, invoice correction, tenant access denied |
| Fleet | Vehicles, assignments, documents, statements, payout settings | vehicle already assigned, permission mismatch, expired contract, driver transfer pending |
| Airport/intercity | Scheduled booking, meeting point, fare terms, confirmation, upcoming journey | flight data absent, pickup access denied, driver no-show, replacement unavailable, route closure |

ბაზისური acceptance მოიცავს screen reader-ს, text scaling-ს, ციფრებთან ერთად ლეიბლებს, ფერებისგან დამოუკიდებელ სტატუსებს, touch targets-ს და დაბალი კლასის Android მოწყობილობებს. ზუსტი WCAG/მობილური ტესტების მატრიცა ფაზის UI-SPEC-ში დაფიქსირდება.

## 8. ტექნიკური საფუძველი

| ფენა | არჩეული მიმართულება |
|---|---|
| Core | Go modular monolith; trips, pricing, identity/supply, finance, safety, B2B მკაფიო module ownership-ით |
| დატვირთვის ცალკე გზა | Go location ingestion / dispatch candidate computation; core-ში durable assignment; realtime gateway; workers |
| Source of truth | PostgreSQL + PostGIS; ფინანსური/assignment ცვლილებები transactional constraints-ით |
| Hot state | Redis: მდებარეობა, availability projection, rate limits/cache; აღსადგენი მონაცემები |
| Events | Kafka-compatible streaming, transactional outbox/inbox, ordering/idempotency; MSK-ის ფორმა benchmark/cost gate-ის შემდეგ |
| Contracts | REST/OpenAPI external; gRPC/Protobuf მხოლოდ პროცესებს შორის; WebSockets snapshot+version recovery-ით |
| Web | TypeScript, React, Next.js კონსოლები; საზიარო design system და generated client |
| Mobile | Passenger Flutter/Dart Android+iOS; Driver Kotlin/Jetpack Compose Android; native Swift საჭიროების მტკიცებულებით |
| Cloud | AWS European region არჩევის gate-ით; Terraform; Docker; ECS; Kubernetes მხოლოდ დასაბუთებული trigger-ით |
| Ops | OpenTelemetry, Grafana, Sentry, GitHub Actions; staging/prod იზოლაცია, backup/restore, on-call |

GSD არის სამუშაოს მართვის პროცესი, runtime dependency არ არის. ადგილი არ აქვს 18 ცალკე database/service-ს მხოლოდ იმიტომ, რომ domain-ები 18-ია. მოდულის გამოყოფა საჭიროებს გაზომილ bottleneck-ს, განსხვავებულ availability/security საჭიროებას ან დამოუკიდებელ გუნდს.

ზუსტი საზღვრები: [DOMAIN-BOUNDARIES](DOMAIN-BOUNDARIES.md). გადაწყვეტილებები: [ADR-ები](adr/README.md). სტრუქტურა: [REPOSITORY-STRUCTURE](REPOSITORY-STRUCTURE.md).

## 9. ხარისხი, უსაფრთხოება და საოპერაციო პასუხისმგებლობა

არ შეიძლება production-ში ჩართვა double assignment, double charge/refund/payout, tenant data leak, PIN bypass, დაუდასტურებელი wait fee ან გადამოწმების გარეშე მოქმედი driver eligibility-ით. ეს invariants ფინანსურ/ავტორიზაციის ტესტებში ცალკე მოწმდება.

საბაზისო კონტროლებია staff MFA, role+tenant authorization, server-side policy, tamper-evident audit, least privilege, encryption/KMS, secret management, dependency/contract/security checks და staged release. OTP არ არის მძღოლის პირადობის სრული მტკიცებულება. location attestation და geofence ამცირებს რისკს, ვერ ადასტურებს ადამიანის უსაფრთხოებას.

Privacy საფუძველი მოიცავს მონაცემების purpose/legal-basis inventory-ს, მინიმიზაციას, retention/deletion-ს, access/export პროცესს, ინციდენტის რეაგირებას და cloud/vendor transfer review-ს. მოქმედი ზედამხედველი და კანონის ტექსტი უნდა შემოწმდეს მიმდინარე წყაროზე; წინა საუბრის სახელები მუდმივ contract-ად არ ჩაიწერება.

საგანგებო მხარდაჭერა არის ადამიანებით დაკომპლექტებული მომსახურება. SOS ეკრანი ვერ ჩაითვლება უსაფრთხოების მომსახურებად, თუ არ არის დადგენილი ვინ იღებს შეტყობინებას, რა საათებში, როგორ ესკალირდება 112-ზე და რა ხდება კავშირის დაკარგვისას. პლატფორმა 112-თან ინტეგრაციას ვერ დაჰპირდება შესაბამისი შეთანხმების გარეშე.

ტექნიკური SLO-ები და synthetic load envelope არის არჩეული engineering targets, ბაზრის პროგნოზი არ არის. ინდიკატორები, thresholds და მტკიცებულებები იხილე [VALIDATION-AND-LAUNCH-GATES.md](VALIDATION-AND-LAUNCH-GATES.md) და TECHNICAL-SPEC-ში.

## 10. გუნდი, ბიუჯეტი და განვითარების ჰორიზონტი

არჩეული დაგეგმვის baseline: **15 ძირითადი product/engineering როლი**, დამატებით fractional იურისტი/ფინანსისტი/security assessor და ქალაქების readiness-სთან ერთად გაზრდილი operations გუნდი. ძირითადი შემადგენლობა: 4 Go/backend, 2 web, 2 Flutter, 2 Android, 1 platform/SRE, 2 QA/automation, 1 product, 1 UX. ტექნიკური ლიდი ერთ-ერთი senior backend როლია; security ownership პლატფორმისა და გარე reviewer-ის პასუხისმგებლობაა. Android+iOS passenger გუნდს release engineering ორივე OS-ზე უნდა შეეძლოს.

საწყისი ჰორიზონტია **12–15 თვე** სრულ scope-ზე, არა დაპირებული deadline. კვლევისა და vendor contracts-ის დაგვიანება ცალკე dependency-ა. Five-city full service-ის ოპერაციები და acquisition ხარჯი engineering-ის ხარჯზე მეტი შეიძლება აღმოჩნდეს.

არჩევანი არის დაგეგმვის ვარაუდი და არ ცვლის რეალური კანდიდატების ხელმისაწვდომობას/ანაზღაურებას. თანხების bottom-up მოდელი და სცენარები BUSINESS-MODEL-შია. საბოლოო hiring/spend/launch ბიუჯეტის დადგენას სჭირდება ხელფასების, vendor-ის და ოპერაციების რეალური ფასები. ეს foundation არც spending commitment-ია და არც დამტკიცებული ეკონომიკა.

## 11. Milestone-ები და შესრულების წესი

| Milestone | ფაზები | დასრულების მტკიცებულება |
|---|---|---|
| M0 — დასაბუთებული contract | 1 | ხუთი ქალაქის evidence, სამართლებრივი/ფინანსური გადაწყვეტილებები, UX/domain/API contracts და გადახედილი economics |
| M1 — platform foundation | 2–5 | აღდგენადი გარემოები, identity/supply, quote და კონკურენტულ დატვირთვაზე სწორი dispatch |
| M2 — სრული ride service | 6–8 | ორივე mobile მხარე, თანხების reconciliation, უსაფრთხოება/support და დაბალი ქსელის recovery |
| M3 — კომერციული პროდუქტები | 9–10 | fleet/corporate tenant isolation, scheduled airport/intercity წესები და operational acceptance |
| M4 — production certification და ხუთი ქალაქი | 11–12 | restore/security/load drills, staffed launch pack და ქალაქების გაზომილი readiness |

სრული roadmap: [.planning/ROADMAP.md](.planning/ROADMAP.md). Atomic requirements და traceability: [.planning/REQUIREMENTS.md](.planning/REQUIREMENTS.md). სამუშაო ბარათები: [TASK-PLAN.md](TASK-PLAN.md). GSD პროცესი და ადგილობრივი runtime audit: [GSD-WORKFLOW.md](GSD-WORKFLOW.md).

ამ foundation-ის შექმნა Phase 1-ის კვლევისა და კონტრაქტების შესრულება არ არის. ინტერビューები, ხელმოწერები, provider sandbox, დატვირთვისა და უსაფრთხოების ტესტები მომავალ სამუშაო გეგმაში ღიად რჩება. ისინი არ ინიშნება completed, სანამ შესაბამისი მტკიცებულება არ არსებობს.

## 12. ძირითადი გასარკვევი გადაწყვეტილებები

საწყისი user brief საკმარისია არქიტექტურის შესაქმნელად. დარჩენილი კითხვები შესრულებად კვლევად გარდაიქმნება:

1. ვინ არის მგზავრობის/ფულის კონტრაქტის principal და ვინ agent; ვინ გასცემს ქვითარს/ინვოისს; VAT/tax ბაზა და driver relationship.
2. რომელ PSP-ს აქვს საჭირო preauth/capture/refund/payout/split უფლებები და signed პირობები; ვის ეკუთვნის funds flow-ში თანხა.
3. ხუთი ქალაქის და აეროპორტების მოქმედი წესები; intercity მომსახურების კლასიფიკაცია.
4. რეალური driver online-hour economics, supply, demand, retention და willingness-to-switch.
5. mapping/geocoding/routing ხარისხი, license/caching პოლიტიკა და vendor ხარჯი ხუთივე ქალაქში.
6. იურიდიულად დასაბუთებული privacy retention/transfers და safety workflow.
7. რეალური გუნდი, დაფინანსება და vendor rates; 15%-ის მდგრადობა; rollout order.

შედეგები ცვლის შესაბამის ADR-ს, requirement-ს, phase plan-ს და decision register-ს ერთ ცვლილებაში. კონკრეტული provider-ის კონტრაქტის ან launch policy-ის არჩევა მხოლოდ ზოგადი „საუკეთესო ტექნოლოგია“ მოთხოვნით ვერ ჩაითვლება ფაქტობრივად გადაწყვეტილად.
