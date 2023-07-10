import React from 'react';

const SkillsSection = () => {
  return (
    <div className="row mt-4">
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h2 className='text-center'>Languages:</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-group-flush">
                            <li className="list-group-item">JavaScript</li>
                            <li className="list-group-item">HTML</li>
                            <li className="list-group-item">CSS</li>
                            <li className="list-group-item">Node</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-group-flush">
                            <li className="list-group-item">Express</li>
                            <li className="list-group-item">React</li>
                            <li className="list-group-item">Python</li>
                            <li className="list-group-item">SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h2 className='text-center'>Tools:</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group-flush">
                                    <li className="list-group-item">Git</li>
                                    <li className="list-group-item">Docker</li>
                                    <li className="list-group-item">Kubernetes</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group-flush">
                                    <li className="list-group-item">Ansible</li>
                                    <li className="list-group-item">Terraform</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>

            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h2 className='text-center'>Software/Platforms:</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group-flush">
                                        <li className="list-group-item">VSCode</li>
                                        <li className="list-group-item">Linux</li>
                                        <li className="list-group-item">Amazon Web Services</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group-flush">
                                        <li className="list-group-item">Microsoft Azure</li>
                                        <li className="list-group-item">Nginx</li>
                                        <li className="list-group-item">Apache</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default SkillsSection;
