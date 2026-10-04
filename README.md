# საქართველოს Ride Platform — Project Foundation

**საწყისი ვერსია:** 2026-10-03 · **საბოლოო გადამოწმება:** 2026-10-04 · **სტატუსი:** სპეციფიკაციების baseline, განხორციელება ჯერ არ დაწყებულა.

**აქტიური პროექტის მისამართი:** `C:/Projects/fair-ride-georgia`. საქაღალდისა და GSD-ის დაწყების ინსტრუქცია: [PROJECT-SETUP.md](PROJECT-SETUP.md). თავდაპირველი არქივი ისტორიულ snapshot-ად რჩება; შემდგომი მუშაობა ამ პროექტში გრძელდება.

ხუთივე ქალაქი პროექტის ფარგლებშია: **ზუგდიდი, ქუთაისი, ბათუმი, თბილისი, რუსთავი**. საფუძველი გათვლილია სრულ პროდუქტზე: მგზავრისა და მძღოლის აპები, dispatch/location, ფინანსები, უსაფრთხოება, ოპერაციები, ფლოტი/კორპორატიული მომსახურება, აეროპორტი და ქალაქთაშორისი მგზავრობა.

არჩეული არქიტექტურაა **Go modular monolith + დამოუკიდებლად მასშტაბირებადი location/dispatch computation და realtime პროცესები**. PostgreSQL/PostGIS ადგენს მგზავრობისა და ფულის ჭეშმარიტ მდგომარეობას. Redis აღსადგენ hot state-ს ინახავს; Kafka მოვლენებს outbox/inbox კონტროლებით ავრცელებს. ECS საწყისი მიმართულებაა; Kubernetes-ს ცალკე დასაბუთება სჭირდება.

GSD Core-ის ადგილობრივი **1.15.0** ვერსია შემოწმებულია. აქ მომზადებულია მის ფორმატთან თავსებადი დოკუმენტები და საწყისი გეგმები. native init/execute პროცესი არ გაშვებულა და გლობალური კონფიგურაცია არ შეცვლილა.

## რით დავიწყოთ კითხვა

| დოკუმენტი | რას პასუხობს |
|---|---|
| [MASTER-SPEC.md](MASTER-SPEC.md) | ქართული მთავარი პროდუქტის/ბიზნესის/ტექნიკური ხედვა და სრული scope |
| [BUSINESS-MODEL.md](BUSINESS-MODEL.md) | მძღოლის საათის ეკონომიკა, ride contribution, გუნდი, ბიუჯეტის სცენარები |
| [TECHNICAL-SPEC.md](TECHNICAL-SPEC.md) | მონაცემები, state machines, dispatch, money, API/events, privacy, SLO/restore |
| [DOMAIN-BOUNDARIES.md](DOMAIN-BOUNDARIES.md) | მოდულების საზღვრები, საკუთრება, ტრანზაქციები და tenant isolation |
| [ADR register](adr/README.md) | 10 გადაწყვეტილება, ალტერნატივები, შედეგები და ცვლილების trigger-ები |
| [REPOSITORY-STRUCTURE.md](REPOSITORY-STRUCTURE.md) | მომავალი მრავალენოვანი monorepo-ის განლაგება და build/review წესები |
| [GSD-WORKFLOW.md](GSD-WORKFLOW.md) | ზუსტი ადგილობრივი workflow, runtime audit, schema და gate-ები |
| [Market & regulatory research](research/MARKET-REGULATORY.md) | საჯარო წყაროებით დადასტურებული ფაქტები და დარჩენილი კვლევა |
| [Source register](research/SOURCE-REGISTER.md) | წყარო, თარიღი, მოქმედი ვერსია და claim-ის ზღვარი |
| [2026-10-04 საჯარო განახლება](research/PUBLIC-EVIDENCE-UPDATE-2026-10-04.md) | ბაზრის/კანონების/ბანკებისა და რუკის მიმდინარე წყაროები, არჩეული მიმართულებები და გაგრძელება |
| [DECISION-REGISTER.md](DECISION-REGISTER.md) | მომხმარებლის მოთხოვნები, არჩეული ვარაუდები და ღია გადაწყვეტილებები |
| [VALIDATION-AND-LAUNCH-GATES.md](VALIDATION-AND-LAUNCH-GATES.md) | როდის შეიძლება implementation/რეალური მომსახურების დაწყება |
| [TASK-PLAN.md](TASK-PLAN.md) | 48 კონკრეტული სამუშაო ბარათი, პასუხისმგებლობა, დამოკიდებულებები და acceptance |

## GSD project state

- [PROJECT](.planning/PROJECT.md): პროექტის მუდმივი კონტექსტი.
- [REQUIREMENTS](.planning/REQUIREMENTS.md): **78** atomic v1 მოთხოვნა; ყველა შესრულების/მტკიცებულების მოლოდინშია.
- [ROADMAP](.planning/ROADMAP.md): **5 milestone, 12 ფაზა**, სრული ხუთქალაქიანი scope.
- [STATE](.planning/STATE.md): განხორციელების პროგრესი **0%**; foundation დოკუმენტების დასრულება პროგრამის დასრულებას არ ნიშნავს.
- [config](.planning/config.json): შემოწმებადი კვლევა/გეგმა/verification/security; ავტომატური გაგრძელება გამორთულია.
- [AGENTS](AGENTS.md): domain/finance/privacy კონტროლები და მუშაობის წესები.

პირველი ორი ფაზისთვის მომზადებულია ათი GSD-compatible გეგმა; 01-04 დაემატა მომხმარებლის ავტონომიური საჯარო კვლევის ინსტრუქციით:

| გეგმა | მიზანი |
|---|---|
| [01-01](.planning/phases/01-validation-contracts/01-01-PLAN.md) | ქალაქების evidence, რეალური field research და economics |
| [01-02](.planning/phases/01-validation-contracts/01-02-PLAN.md) | სამართლებრივი funds flow და PSP/maps კონტრაქტები |
| [01-03](.planning/phases/01-validation-contracts/01-03-PLAN.md) | პროდუქტის/privacy/security/API contract და M0 მიმოხილვა |
| [01-04](.planning/phases/01-validation-contracts/01-04-PLAN.md) | დამოუკიდებელი მიმდინარე საჯარო კვლევა და დასაბუთებული სამუშაო მიმართულებები; თავდაპირველი გარე gate-ები ღიაა |
| [02-01](.planning/phases/02-platform-foundation/02-01-PLAN.md) | Backend bootstrap და სერვერის კონტრაქტები |
| [02-02](.planning/phases/02-platform-foundation/02-02-PLAN.md) | TypeScript/Dart კონტრაქტების ბიბლიოთეკები |
| [02-03](.planning/phases/02-platform-foundation/02-03-PLAN.md) | Kotlin კლიენტი, ინტეგრირებული CI და provenance |
| [02-04](.planning/phases/02-platform-foundation/02-04-PLAN.md) | იზოლირებული infrastructure და შეზღუდული Kafka trial |
| [02-05](.planning/phases/02-platform-foundation/02-05-PLAN.md) | Instrumented synthetic staging tracer |
| [02-06](.planning/phases/02-platform-foundation/02-06-PLAN.md) | outbox/inbox, recovery და foundation acceptance |

შემდგომი ფაზების სამუშაო ბარათები უკვე გაწერილია. native გეგმები მათი შესრულების წინ განახლდება რეალური codebase-ისა და წინა ფაზის მტკიცებულების მიხედვით. ეს არ ცვლის scope-ს და არც აჩერებს დღევანდელი foundation-ის მომზადებას.

## რას ნიშნავს შემოწმებული foundation

შესრულებულია საჯარო წყაროების, პროცესისა და არქიტექტურის კვლევა; შექმნილია reviewable specification და მოთხოვნა→ფაზა→სამუშაოს traceability. ცალკე მიმოხილვები და სტრუქტურული შემოწმება მოცემულია [VALIDATION-REPORT-ში](VALIDATION-REPORT.md), [გეგმების სპეციალიზებულ მიმოხილვაში](PLAN-CHECK-REVIEW.md), [ბიზნეს/რეგულაციების მიმოხილვაში](research/FOUNDATION-REVIEW.md) და [არქიტექტურის მიმოხილვაში](ARCHITECTURE-REVIEW.md).

**რეალური ინტერვიუები, მძღოლის ხარჯის დღიურები, ბანკის/აეროპორტის კონტრაქტები, იურისტის დასკვნა, საბოლოო ტარიფები და პროგრამის დატვირთვის/უსაფრთხოების ტესტები ჯერ არ შესრულებულა.** საჯარო წყაროები ამას ვერ ჩაანაცვლებს. ღია საკითხებს ჰყავს სამუშაო, მტკიცებულების კრიტერიუმი და პასუხისმგებელი როლი; ისინი არ არის ჩუმად გამოცხადებული დადასტურებულად.

15%-იანი საკომისიო, 15-კაციანი product/engineering გუნდი, 12–15 თვე და 4.95–6.00 მილიონი ₾ **დაგეგმვის სცენარებია**. რეალური კომერციული ვალდებულება დგინდება ვალიდირებული ფინანსური მოდელითა და ფასებით. ფინანსური კონტროლი, უსაფრთხოების მხარდაჭერა, privacy და accessibility სრულ პროდუქტს თავიდანვე ეკუთვნის.

საჯარო წყაროების მოძიება და ჩვეულებრივი დაგეგმვის არჩევანი აგენტის სამუშაოა; მომხმარებლისგან მათი მოტანა საჭირო არ არის. [განახლებულ პაკეტში](research/PUBLIC-EVIDENCE-UPDATE-2026-10-04.md) გამოყოფილია გადამოწმებული ფაქტები, არჩეული კანდიდატები და რეალური კომპანიის/კვლევის შემდგომი პირობები. Phase 1/M0 ღიაა; დამოუკიდებელი ადგილობრივი სპეციფიკაციები შეიძლება მომზადდეს მკაფიო ვარაუდებით. აპლიკაციის განხორციელება იწყება შესაბამისი review-ისა და ცალკე implementation ინსტრუქციის შემდეგ.
