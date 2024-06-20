import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BANKING_PARTNERS_LABEL,
  BANKS_DATA,
  LOAN_SERVICES,
  LOAN_SERVICES_NAVIGATOR,
  TOP_ASKED_QUESTIONS,
  READ_MORE,
} from "@/constants";
import { theme } from "@/constants/basetheme";
import CustomHeading from "../CustomHeading/CustomHeading";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {
  BannerWrapper,
  NavigatorLink,
  NavigatorWrapper,
} from "../Properties/Properties.styles";
import VaastuDetailsContainer from "../Vaastu/VaastuDetailsContainer";
import {
  Container,
  BankingPartnersWrapper,
  PartnersFilter,
  FilterItem,
  FilteredData,
  BankCard,
  CalculatorWrapper,
  CalculatorContainer,
  CalculatorHeader,
  CalculatorText,
  CalculatorInputGroup,
  CalculatorInput,
  SummaryContainer,
  SummaryGrid,
  QuestionsWrapper,
  QuestionCard,
  ReadMoreCard,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./Loan.styles";
import HomeLoanModal from "./HomeLoanModal";
import InterestRateModal from "./InterestRateModal";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const Loan: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(BANKING_PARTNERS_LABEL[0]);
  const [formData, setFormData] = useState({
    amount: "3000000",
    interestRate: "8.4",
    tenure: "20",
  });
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [modalData, setModalData] = useState<{
    question: string;
    answerHeading: string;
    answer: string[];
    description: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuestionClick = (questionData: any) => {
    setModalData(questionData);
  };

  const handleCloseModal = () => {
    setReadMoreModal(null);
    setModalData(null);
  };
  const [readMoreModal, setReadMoreModal] = useState<string | null>();

  const activeReadMoreComponent = (name: string) => {
    if (name === "home_loan") {
      return (
        <HomeLoanModal
          closeModal={() => {
            setReadMoreModal(null);
          }}
        />
      );
    } else {
      return (
        <InterestRateModal
          closeModal={() => {
            setReadMoreModal(null);
          }}
        />
      );
    }
  };
  useEffect(() => {
    const calculateEMI = () => {
      const amount = parseFloat(formData.amount);
      const interestRate = parseFloat(formData.interestRate);
      const tenureYears = parseFloat(formData.tenure);

      if (
        !isNaN(amount) &&
        !isNaN(interestRate) &&
        !isNaN(tenureYears) &&
        amount > 0 &&
        interestRate > 0 &&
        tenureYears > 0
      ) {
        const tenureMonths = tenureYears * 12;
        const monthlyInterestRate = interestRate / (12 * 100);
        const emi =
          (amount *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, tenureMonths)) /
          (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
        const totalInterest = emi * tenureMonths - amount;

        setEmi(emi);
        setTotalInterest(totalInterest);
      } else {
        setEmi(0);
        setTotalInterest(0);
      }
    };

    calculateEMI();
  }, [formData]);

  const AnimatedBannerWrapper = animated(BannerWrapper);
  const AnimatedBankingPartnersWrapper = animated(BankingPartnersWrapper);
  const AnimatedCalculator = animated(CalculatorWrapper);
  // const AnimatedLocationWrapper = animated(LocationWrapper)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [bankingRef, bankingInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [calculatorRef, calculatorInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  // const [locationRef, locationInView] = useInView({
  // triggerOnce: true,
  // threshold: 0.3,
  // });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(150px)",
  });
  const bankingAnimation = useSpring({
    opacity: bankingInView ? 1 : 0,
    transform: bankingInView ? "translateY(0)" : "translateY(150px)",
  });
  const calculatorAnimation = useSpring({
    opacity: calculatorInView ? 1 : 0,
    transform: calculatorInView ? "translateY(0)" : "translateY(150px)",
  });
  // const locationAnimation = useSpring({
  // opacity: locationInView ? 1 : 0,
  // transform: locationInView ? 'translateY(0)' : 'translateY(150px)',
  // });

  return (
    <Container>
      <Header activeTab="Loan Services" />
      <AnimatedBannerWrapper ref={ref} style={animation}>
        <Image
          src="/assets/images/loanPage.jpg"
          alt="Loan Services"
          layout="responsive"
          objectFit="cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <NavigatorWrapper>
          {LOAN_SERVICES_NAVIGATOR.map((item, index) => (
            <Link key={index} href={item.link} scroll={false} passHref>
              <NavigatorLink>{item.name}</NavigatorLink>
            </Link>
          ))}
        </NavigatorWrapper>
      </AnimatedBannerWrapper>

      <CustomHeading heading="We Provide Loan Services" id={"loanServices"} />
      <VaastuDetailsContainer data={LOAN_SERVICES} columns={3} />

      <CustomHeading heading="Our Banking Partners" id={"bankingPartners"} />
      <AnimatedBankingPartnersWrapper ref={bankingRef} style={bankingAnimation}>
        <PartnersFilter>
          {BANKING_PARTNERS_LABEL?.map((item, index) => (
            <FilterItem
              key={index}
              active={activeFilter.name === item.name}
              onClick={() => setActiveFilter(item)}
            >
              <p>{item?.name}</p>
            </FilterItem>
          ))}
        </PartnersFilter>
        <FilteredData>
          {BANKS_DATA?.[activeFilter?.value]?.map((item, index) => (
            <BankCard key={index}>
              <Image
                src={item?.image}
                alt={item?.name}
                height={50}
                width={127}
                loading="eager"
              />
              <div>
                <p
                  style={{
                    fontFamily: theme.fonts.lato,
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 5,
                  }}
                >
                  {item?.name}
                </p>
                <p
                  style={{
                    fontFamily: theme.fonts.lato,
                    fontSize: 14,
                    fontWeight: 400,
                    marginBottom: 5,
                  }}
                >
                  Interest Rate: {item?.interestRate} onwards
                </p>
                <p
                  style={{
                    fontFamily: theme.fonts.lato,
                    fontSize: 14,
                    fontWeight: 400,
                    marginBottom: 5,
                  }}
                >
                  Max Tenure: {item?.tenure} Years
                </p>
              </div>
            </BankCard>
          ))}
        </FilteredData>
      </AnimatedBankingPartnersWrapper>

      <CustomHeading heading="Finance Calculator" id="financialCalculator" />
      <AnimatedCalculator ref={calculatorRef} style={calculatorAnimation}>
        <CalculatorContainer>
          <CalculatorHeader>
            <p>EMI Calculator</p>
          </CalculatorHeader>
          <CalculatorText>
            Calculate EMI with our in-built calculator, consult with us for
            better options for home loans and documentation help!
          </CalculatorText>
          <CalculatorText>Consult: +91 9850004775</CalculatorText>
          <CalculatorInputGroup>
            <CalculatorInput>
              <p>Loan Amount</p>
              <input
                type="text"
                name="amount"
                placeholder="Loan Amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </CalculatorInput>
            <CalculatorInput>
              <p>Rate of Interest (P.A.)</p>
              <input
                type="text"
                name="interestRate"
                placeholder="Interest Rate"
                value={formData.interestRate}
                onChange={handleChange}
              />
            </CalculatorInput>
          </CalculatorInputGroup>
          <CalculatorInput width="90%">
            <p>Loan Tenure (Years)</p>
            <input
              type="text"
              name="tenure"
              placeholder="Loan Tenure"
              value={formData.tenure}
              onChange={handleChange}
            />
          </CalculatorInput>
          <SummaryContainer>
            <p>Summary</p>
            <SummaryGrid>
              <div>
                <p>Monthly EMI</p>
                <p>₹ {emi.toFixed(2)}</p>
              </div>
              <div>
                <p>Total Interest</p>
                <p>₹ {totalInterest.toFixed(2)}</p>
              </div>
              <div>
                <p>Principle Amount</p>
                <p>
                  ₹{" "}
                  {parseFloat(formData.amount) > 0
                    ? parseFloat(formData.amount).toFixed(2)
                    : "0.00"}
                </p>
              </div>
              <div>
                <p>Total Payment</p>
                <p>
                  ₹ {(parseFloat(formData.amount) + totalInterest).toFixed(2)}
                </p>
              </div>
            </SummaryGrid>
          </SummaryContainer>
        </CalculatorContainer>
        <Image
          src="/assets/images/emiCalculator.jpg"
          alt="emi calculator"
          height={344}
          width={519}
          loading="eager"
        />
      </AnimatedCalculator>

      <CustomHeading heading="Top Asked Questions" id={"faqs"} />
      <QuestionsWrapper>
        {TOP_ASKED_QUESTIONS?.map((item, index) => (
          <QuestionCard key={index} onClick={() => handleQuestionClick(item)}>
            <p>{item.question}</p>
            {/* Read more button */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                backgroundColor: "#0173B0",
                borderRadius: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 24,
                width: 75,
              }}
            >
              <p
                style={{
                  fontSize: 8,
                  fontFamily: theme.fonts.lato,
                  color: theme.colors.white,
                }}
              >
                Read More
              </p>
            </div>
          </QuestionCard>
        ))}
      </QuestionsWrapper>

      {modalData && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e: any) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            <h3>{modalData.answerHeading}</h3>
            <ol>
              {modalData.answer.map((ans, idx) => (
                <li key={idx}>{ans}</li>
              ))}
            </ol>
            <p>{modalData.description}</p>
          </ModalContent>
        </ModalOverlay>
      )}

      <CustomHeading heading="Read More" />
      <QuestionsWrapper>
        {READ_MORE?.map((item, index) => (
          <ReadMoreCard
            key={index}
            onClick={() => {
              setReadMoreModal(item.name);
            }}
          >
            <p>{item.question}</p>
          </ReadMoreCard>
        ))}
      </QuestionsWrapper>
      {readMoreModal && activeReadMoreComponent(readMoreModal)}
      <Footer />
    </Container>
  );
};

export default Loan;
