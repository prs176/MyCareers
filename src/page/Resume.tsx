import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import { useState } from "react";
import CareerCard from "../component/card/CareerCard";
import CertificationCard from "../component/card/CertificationCard";
import ProjectCard from "../component/card/ProjectCard";
import SchoolCard from "../component/card/SchoolCard";
import TeamCard from "../component/card/TeamCard";
import TechStackCard from "../component/card/TechStackCard";
import Section from "../component/Section";
import {
  Award,
  Career,
  Certification,
  Project,
  School,
  Team,
  TechStack,
  User,
} from "../models/user";
import { FlexContainer, Name, NameInput, ProfileContainer, ToolContainer } from "./styled/Resume";
import CareerCardEdit from "../component/card/CareerCardEdit";
import SchoolCardEdit from "../component/card/SchoolCardEdit";
import TechStackCardEdit from "../component/card/TechStackCardEdit";
import ProjectCardEdit from "../component/card/ProjectCardEdit";
import TeamCardEdit from "../component/card/TeamCardEdit";
import CertificationCardEdit from "../component/card/CertificationCardEdit";
import AwardCardEdit from "../component/card/AwardCardEdit";
import AwardCard from "../component/card/AwardCard";

const Resume = (): JSX.Element => {
  const [user, setUser] = useState<User>({
    idx: 1,
    name: "로미",
    intro: "밥 잘 먹음",
    birth: "2013-09-10",
  });

  const [isMyPage, setIsMyPage] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  const [careers, setCareers] = useState<{ career: Career; isEdit: boolean }[]>([
    {
      career: {
        idx: 0,
        userIdx: -1,
        name: "로미",
        role: "로미",
        period: "로미 ~ 로미",
        explanation: "로미",
        logs: [
          {
            idx: 0,
            recordIdx: 0,
            title: "로미",
            intro: "로미",
            period: "로미",
            learning: "로미",
            contribution: "로미",
            overcame: "로미",
            etc: "로미",
          },
        ],
      },
      isEdit: false,
    },
  ]);
  const [schools, setSchools] = useState<{ school: School; isEdit: boolean }[]>([
    {
      school: {
        idx: 1,
        userIdx: -1,
        name: "로미",
        department: "로미",
        period: "로미 ~ 로미",
        explanation: "로미",
        logs: [],
      },
      isEdit: false,
    },
  ]);
  const [techStacks, setTechStacks] = useState<{ techStack: TechStack; isEdit: boolean }[]>([
    {
      techStack: { idx: 2, userIdx: -1, name: "로미", logs: [] },
      isEdit: false,
    },
  ]);
  const [projects, setProjects] = useState<{ project: Project; isEdit: boolean }[]>([
    {
      project: {
        idx: 3,
        userIdx: -1,
        name: "로미",
        role: "로미",
        period: "로미 ~ 로미",
        explanation: "로미",
        logs: [],
      },
      isEdit: false,
    },
  ]);
  const [teams, setTeams] = useState<{ team: Team; isEdit: boolean }[]>([
    {
      team: {
        idx: 4,
        userIdx: -1,
        name: "로미",
        role: "로미",
        period: "로미 ~ 로미",
        explanation: "로미",
        logs: [],
      },
      isEdit: false,
    },
  ]);
  const [certifications, setCertifications] = useState<
    { certification: Certification; isEdit: boolean }[]
  >([
    {
      certification: {
        idx: 5,
        userIdx: -1,
        name: "로미",
        from: "로미",
        start: "로미",
        end: "로미",
        id: "로미",
        explanation: "로미",
        logs: [],
      },
      isEdit: false,
    },
  ]);
  const [awards, setAwards] = useState<{ award: Award; isEdit: boolean }[]>([
    {
      award: {
        idx: 6,
        userIdx: -1,
        name: "로미",
        from: "로미",
        start: "로미",
        explanation: "로미",
        logs: [
          {
            idx: 1,
            recordIdx: 6,
            title: "로미",
            intro: "로미",
            period: "로미",
            learning: "로미",
            contribution: "로미",
            overcame: "로미",
            etc: "로미",
          },
          {
            idx: 2,
            recordIdx: 6,
            title: "로미",
            intro: "로미",
            period: "로미",
            learning: "로미",
            contribution: "로미",
            overcame: "로미",
            etc: "로미",
          },
        ],
      },
      isEdit: false,
    },
  ]);

  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [intro, setIntro] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value);
  const onChangeIntro = (e: React.ChangeEvent<HTMLInputElement>) => setIntro(e.target.value);

  return (
    <div>
      <ProfileContainer>
        <ToolContainer>
          <FlexContainer>
            {isEditProfile ? (
              <>
                <NameInput type="text" onChange={onChangeName} value={name}></NameInput>
                <input type="date" onChange={onChangeBirth} value={birth}></input>
              </>
            ) : (
              <>
                <Name>{user.name}</Name>
                {user.birth}
              </>
            )}
          </FlexContainer>

          <FlexContainer>
            {isEditProfile ? (
              <IconButton>
                <DoneIcon
                  onClick={() => {
                    // 편집
                    setIsEdit(false);
                    setIsEditProfile(false);
                  }}
                />
              </IconButton>
            ) : isMyPage ? (
              <>
                <IconButton
                  onClick={() => {
                    setIsEdit(true);
                    setIsEditProfile(true);
                    setName(user.name);
                    setBirth(user.birth);
                    setIntro(user.intro);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <ContentCopyIcon />
                </IconButton>
                <IconButton>
                  <PrintIcon />
                </IconButton>
              </>
            ) : (
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            )}
          </FlexContainer>
        </ToolContainer>
        <br></br>
        {isEditProfile ? (
          <input type="text" onChange={onChangeIntro} value={intro}></input>
        ) : (
          <>{user.intro}</>
        )}
      </ProfileContainer>

      <Section
        title="경력"
        onAdd={() => {
          if (isEdit) {
            return;
          }
          setCareers([
            ...careers,
            {
              career: {
                idx: -1,
                userIdx: -1,
                name: "",
                role: "",
                period: "",
                explanation: "",
                logs: [],
              },
              isEdit: true,
            },
          ]);
          setIsEdit(true);
        }}
      >
        {careers.map((career) =>
          career.isEdit ? (
            <CareerCardEdit
              onDone={() => {
                //변경
                setIsEdit(false);
                setCareers(
                  careers.map((it) => {
                    return { ...it, isEdit: false };
                  })
                );
              }}
              key={"career" + career.career.idx}
              career={career.career}
            ></CareerCardEdit>
          ) : (
            <CareerCard
              onAdd={() => {
                setCareers(
                  careers.map((it) => {
                    if (it.career.idx === career.career.idx) {
                      return {
                        ...it,
                        career: {
                          ...it.career,
                          logs: [
                            ...it.career.logs,
                            {
                              idx: -1,
                              recordIdx: career.career.idx,
                              title: "",
                              intro: "",
                              period: "",
                            },
                          ],
                        },
                      };
                    } else {
                      return it;
                    }
                  })
                );
              }}
              onEditLog={() => {
                setIsEdit(true);
              }}
              onDeleteLog={() => {}}
              onDone={() => {
                setIsEdit(false);
              }}
              onEdit={() => {
                if (isEdit) {
                  return;
                }
                setIsEdit(true);
                setCareers(
                  careers.map((it) => {
                    if (it.career.idx === career.career.idx) {
                      return { ...it, isEdit: true };
                    }
                    return it;
                  })
                );
              }}
              onDelete={() => {}}
              key={"career" + career.career.idx}
              career={career.career}
            />
          )
        )}
      </Section>

      <Section
        title="학력"
        onAdd={() => {
          if (isEdit) {
            return;
          }
          setIsEdit(true);
          setSchools([
            ...schools,
            {
              school: {
                idx: -1,
                userIdx: -1,
                name: "",
                department: "",
                period: "",
                explanation: "",
                logs: [],
              },
              isEdit: true,
            },
          ]);
        }}
      >
        {schools.map((school) =>
          school.isEdit ? (
            <SchoolCardEdit
              onDone={() => {
                //변경
                setSchools(
                  schools.map((it) => {
                    return { ...it, isEdit: false };
                  })
                );
                setIsEdit(false);
              }}
              key={"school" + school.school.idx}
              school={school.school}
            />
          ) : (
            <SchoolCard
              onAdd={() => {
                setSchools(
                  schools.map((it) => {
                    if (it.school.idx === school.school.idx) {
                      return {
                        ...it,
                        school: {
                          ...it.school,
                          logs: [
                            ...it.school.logs,
                            {
                              idx: -1,
                              recordIdx: school.school.idx,
                              title: "",
                              intro: "",
                              period: "",
                            },
                          ],
                        },
                      };
                    } else {
                      return it;
                    }
                  })
                );
              }}
              onEditLog={() => {
                setIsEdit(true);
              }}
              onDeleteLog={() => {}}
              onDone={() => {
                setIsEdit(false);
              }}
              onEdit={() => {
                if (isEdit) {
                  return;
                }
                setIsEdit(true);
                setSchools(
                  schools.map((it) => {
                    if (it.school.idx === school.school.idx) {
                      return { ...it, isEdit: true };
                    }
                    return it;
                  })
                );
              }}
              onDelete={() => {}}
              key={"school" + school.school.idx}
              school={school.school}
            />
          )
        )}
      </Section>
      <Section
        title="보유기술"
        onAdd={() => {
          if (isEdit) {
            return;
          }
          setTechStacks([
            ...techStacks,
            {
              techStack: { idx: -1, userIdx: -1, name: "", logs: [] },
              isEdit: true,
            },
          ]);
          setIsEdit(true);
        }}
      >
        {techStacks.map((techStack) =>
          techStack.isEdit ? (
            <TechStackCardEdit
              onDone={() => {
                //변경
                setTechStacks(
                  techStacks.map((it) => {
                    return { ...it, isEdit: false };
                  })
                );
                setIsEdit(false);
              }}
              key={"techStack" + techStack.techStack.idx}
              techStack={techStack.techStack}
            />
          ) : (
            <TechStackCard
              onAdd={() => {
                setTechStacks(
                  techStacks.map((it) => {
                    if (it.techStack.idx === techStack.techStack.idx) {
                      return {
                        ...it,
                        techStack: {
                          ...it.techStack,
                          logs: [
                            ...it.techStack.logs,
                            {
                              idx: -1,
                              recordIdx: techStack.techStack.idx,
                              title: "",
                              intro: "",
                              period: "",
                            },
                          ],
                        },
                      };
                    } else {
                      return it;
                    }
                  })
                );
              }}
              onEditLog={() => {
                setIsEdit(true);
              }}
              onDeleteLog={() => {}}
              onDone={() => {
                setIsEdit(false);
              }}
              onEdit={() => {
                if (isEdit) {
                  return;
                }
                setIsEdit(true);
                setTechStacks(
                  techStacks.map((it) => {
                    if (it.techStack.idx === techStack.techStack.idx) {
                      return { ...it, isEdit: true };
                    }
                    return it;
                  })
                );
              }}
              onDelete={() => {}}
              key={"techStack" + techStack.techStack.idx}
              techStack={techStack.techStack}
            />
          )
        )}
      </Section>
      <Section
        title="프로젝트"
        onAdd={() => {
          if (isEdit) {
            return;
          }
          setProjects([
            ...projects,
            {
              project: {
                idx: -1,
                userIdx: -1,
                name: "",
                role: "",
                period: "",
                explanation: "",
                logs: [],
              },
              isEdit: true,
            },
          ]);
          setIsEdit(true);
        }}
      >
        {projects.map((project) =>
          project.isEdit ? (
            <ProjectCardEdit
              onDone={() => {
                //변경
                setProjects(
                  projects.map((it) => {
                    return { ...it, isEdit: false };
                  })
                );
                setIsEdit(false);
              }}
              key={"project" + project.project.idx}
              project={project.project}
            />
          ) : (
            <ProjectCard
              onAdd={() => {
                setProjects(
                  projects.map((it) => {
                    if (it.project.idx === project.project.idx) {
                      return {
                        ...it,
                        project: {
                          ...it.project,
                          logs: [
                            ...it.project.logs,
                            {
                              idx: -1,
                              recordIdx: project.project.idx,
                              title: "",
                              intro: "",
                              period: "",
                            },
                          ],
                        },
                      };
                    } else {
                      return it;
                    }
                  })
                );
              }}
              onEditLog={() => {
                setIsEdit(true);
              }}
              onDeleteLog={() => {}}
              onDone={() => {
                setIsEdit(false);
              }}
              onEdit={() => {
                if (isEdit) {
                  return;
                }
                setIsEdit(true);
                setProjects(
                  projects.map((it) => {
                    if (it.project.idx === project.project.idx) {
                      return { ...it, isEdit: true };
                    }
                    return it;
                  })
                );
              }}
              onDelete={() => {}}
              key={"project" + project.project.idx}
              project={project.project}
            />
          )
        )}
      </Section>
      <Section
        title="단체"
        onAdd={() => {
          if (isEdit) {
            return;
          }
          setTeams([
            ...teams,
            {
              team: {
                idx: -1,
                userIdx: -1,
                name: "",
                role: "",
                period: "",
                explanation: "",
                logs: [],
              },
              isEdit: true,
            },
          ]);
          setIsEdit(true);
        }}
      >
        {teams.map((team) =>
          team.isEdit ? (
            <TeamCardEdit
              onDone={() => {
                //변경
                setTeams(
                  teams.map((it) => {
                    return { ...it, isEdit: false };
                  })
                );
                setIsEdit(false);
              }}
              key={"team" + team.team.idx}
              team={team.team}
            />
          ) : (
            <TeamCard
              onAdd={() => {
                setTeams(
                  teams.map((it) => {
                    if (it.team.idx === team.team.idx) {
                      return {
                        ...it,
                        team: {
                          ...it.team,
                          logs: [
                            ...it.team.logs,
                            {
                              idx: -1,
                              recordIdx: team.team.idx,
                              title: "",
                              intro: "",
                              period: "",
                            },
                          ],
                        },
                      };
                    } else {
                      return it;
                    }
                  })
                );
              }}
              onEditLog={() => {
                setIsEdit(true);
              }}
              onDeleteLog={() => {}}
              onDone={() => {
                setIsEdit(false);
              }}
              onEdit={() => {
                if (isEdit) {
                  return;
                }
                setIsEdit(true);
                setTeams(
                  teams.map((it) => {
                    if (it.team.idx === team.team.idx) {
                      return { ...it, isEdit: true };
                    }
                    return it;
                  })
                );
              }}
              onDelete={() => {}}
              key={"team" + team.team.idx}
              team={team.team}
            />
          )
        )}
      </Section>
      <Section
        title="자격증"
        onAdd={() => {
          if (isEdit) {
            return;
          }
          certifications.push({
            certification: {
              idx: -1,
              userIdx: -1,
              name: "",
              from: "",
              start: "",
              end: "",
              id: "",
              explanation: "",
              logs: [],
            },
            isEdit: true,
          });
          setCertifications(certifications);
          setIsEdit(true);
        }}
      >
        {certifications.map((certification) =>
          certification.isEdit ? (
            <CertificationCardEdit
              onDone={() => {
                //변경
                setCertifications(
                  certifications.map((it) => {
                    return { ...it, isEdit: false };
                  })
                );
                setIsEdit(false);
              }}
              key={"certification" + certification.certification.idx}
              certification={certification.certification}
            />
          ) : (
            <CertificationCard
              onAdd={() => {
                setCertifications(
                  certifications.map((it) => {
                    if (it.certification.idx === certification.certification.idx) {
                      return {
                        ...it,
                        award: {
                          ...it.certification,
                          logs: [
                            ...it.certification.logs,
                            {
                              idx: -1,
                              recordIdx: certification.certification.idx,
                              title: "",
                              intro: "",
                              period: "",
                            },
                          ],
                        },
                      };
                    } else {
                      return it;
                    }
                  })
                );
              }}
              onEditLog={() => {
                setIsEdit(true);
              }}
              onDeleteLog={() => {}}
              onDone={() => {
                setIsEdit(false);
              }}
              onEdit={() => {
                if (isEdit) {
                  return;
                }
                setIsEdit(true);
                setCertifications(
                  certifications.map((it) => {
                    if (it.certification.idx === certification.certification.idx) {
                      return { ...it, isEdit: true };
                    }
                    return it;
                  })
                );
              }}
              onDelete={() => {}}
              key={"certification" + certification.certification.idx}
              certification={certification.certification}
            />
          )
        )}
      </Section>
      <Section
        title="수상"
        onAdd={() => {
          if (isEdit) {
            return;
          }
          setAwards([
            ...awards,
            {
              award: {
                idx: -1,
                userIdx: -1,
                name: "",
                from: "",
                start: "",
                explanation: "",
                logs: [],
              },
              isEdit: true,
            },
          ]);
          setIsEdit(true);
        }}
      >
        {awards.map((award) =>
          award.isEdit ? (
            <AwardCardEdit
              onDone={() => {
                //변경
                setAwards(
                  awards.map((it) => {
                    return { ...it, isEdit: false };
                  })
                );
                setIsEdit(false);
              }}
              key={"award" + award.award.idx}
              award={award.award}
            />
          ) : (
            <AwardCard
              onAdd={() => {
                setAwards(
                  awards.map((it) => {
                    if (it.award.idx === award.award.idx) {
                      return {
                        ...it,
                        award: {
                          ...it.award,
                          logs: [
                            ...it.award.logs,
                            {
                              idx: -1,
                              recordIdx: award.award.idx,
                              title: "",
                              intro: "",
                              period: "",
                            },
                          ],
                        },
                      };
                    } else {
                      return it;
                    }
                  })
                );
              }}
              onEditLog={() => {
                setIsEdit(true);
              }}
              onDeleteLog={() => {}}
              onDone={() => {
                setIsEdit(false);
              }}
              onEdit={() => {
                if (isEdit) {
                  return;
                }
                setIsEdit(true);
                setAwards(
                  awards.map((it) => {
                    if (it.award.idx === award.award.idx) {
                      return { ...it, isEdit: true };
                    }
                    return it;
                  })
                );
              }}
              onDelete={() => {}}
              key={"award" + award.award.idx}
              award={award.award}
            />
          )
        )}
      </Section>
    </div>
  );
};

export default Resume;
